import sendemail from "../config/email.js";

export const sendmessageemail = async (to, msg)=>{
    const subject = "Contacting for Services";
    
    const message = `
    <h1>New Contact Message</h1>
    <p><strong>From:</strong> ${msg.fullname}</p>
    <p><strong>Email:</strong> ${msg.email}</p>
    <p><strong>Mobile:</strong> ${msg.mobileno}</p>
    <p><strong>Message:</strong></p>
    <p>${msg.message}</p>
    `;

    await sendemail(to, subject, message);
}

export const sendConfirmationEmail = async (to, name) => {
    const subject = "Thank you for contacting me!";
    
    const message = `
    <h1>Thank You, ${name}!</h1>
    <p>I've received your message and will get back to you soon.</p>
    <p>Best regards,<br>Anurag Singh</p>
    `;

    await sendemail(to, subject, message);
}