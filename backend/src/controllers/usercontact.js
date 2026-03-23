import Contact from "../models/contactmodel.js";
import { sendmessageemail, sendConfirmationEmail } from "../utils/emailservice.js";

export const UserContact = async (req, res, next) => {
  try {
    const { fullname, email, mobileno, message } = req.body;

    if (!fullname || !email || !mobileno || !message) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const NewUser = await Contact.create({
      fullname,
      email,
      mobileno,
      message,
    });
    console.log(NewUser);

    // Send email notification to owner
    await sendmessageemail(process.env.GMAIL_USER, { fullname, email, mobileno, message });

    // Send confirmation email to user
    await sendConfirmationEmail(email, fullname);

    res.status(201).json({ message: "Thanks for Contacting me...!" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
