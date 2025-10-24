const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

let transporter;
if (gmailEmail && gmailPassword) {
  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailEmail,
      pass: gmailPassword,
    },
  });
}

// Document upload handler
exports.onDocumentUpload = functions.storage
  .bucket()
  .object()
  .onFinalize(async (object) => {
    const filePath = object.name;
    if (filePath && filePath.startsWith("providers/") && filePath.includes("/documents/")) {
      try {
        const pathParts = filePath.split("/");
        const providerId = pathParts[1];
        const documentId = pathParts[3];
        await admin.firestore()
          .collection("providers")
          .doc(providerId)
          .collection("documents")
          .doc(documentId)
          .set({
            fileName: filePath,
            status: "under_review",
            uploadedAt: admin.firestore.FieldValue.serverTimestamp(),
            documentType: documentId
          });
        console.log("Document uploaded for provider:", providerId);
      } catch (error) {
        console.error("Error processing document upload:", error);
      }
    }
    return null;
  });

// Payment verification
exports.verifyPaystackPayment = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError("unauthenticated", "User must be authenticated");
  }
  const { reference, providerId, userEmail, userName } = data;
  try {
    await admin.firestore().collection("providers").doc(providerId).update({
      "verification.paymentVerified": true,
      "verification.status": "approved",
      "subscription.status": "active",
      "subscription.plan": "basic",
      "subscription.paymentStatus": "paid",
      "subscription.paystackReference": reference,
      "subscription.startDate": admin.firestore.FieldValue.serverTimestamp(),
      "verifiedAt": admin.firestore.FieldValue.serverTimestamp()
    });

    if (transporter && userEmail) {
      const mailOptions = {
        from: "Bay Connect <noreply@bayhomeimprovements.co.za>",
        to: userEmail,
        subject: "Welcome to Bay Connect as a Verified Provider!",
        html: `<h2>Welcome to Bay Connect, ${userName}!</h2>
               <p>Congratulations! You are now a verified provider.</p>`,
      };
      await transporter.sendMail(mailOptions);
      console.log("Provider welcome email sent to:", userEmail);
    }

    return { success: true, message: "Payment verified and provider activated!" };
  } catch (error) {
    console.error("Payment verification error:", error);
    throw new functions.https.HttpsError("internal", "Payment verification failed");
  }
});

// Send custom email function
exports.sendEmail = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError("unauthenticated", "User must be authenticated");
  }
  
  const { to, subject, html } = data;
  
  try {
    if (!transporter) {
      throw new functions.https.HttpsError("failed-precondition", "Email not configured");
    }

    const mailOptions = {
      from: "Bay Connect <noreply@bayhomeimprovements.co.za>",
      to: to,
      subject: subject,
      html: html,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent to:", to);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new functions.https.HttpsError("internal", "Failed to send email");
  }
});

console.log("Bay Connect Functions loaded successfully");
