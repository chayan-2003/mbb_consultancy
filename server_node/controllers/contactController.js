import nodemailer from 'nodemailer';
import Contact from '../models/contact.js';

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'debayang2013@gmail.com', // Replace with your Gmail email address
    pass: 'ypvc gjvj hcju exio', // Replace with your Gmail password or an app-specific password
  },
});

export const submitContactForm = async (req, res) => {
  try {
    const { name, email,contact_number,work_Title, desc } = req.body;

    const newContact = new Contact({
      name,
      email,
      contact_number,
      work_Title,
      desc,
    });

    await newContact.save();

    const mailOptions = {
      from: 'debayang2013@gmail.com',
      to: 'justaisehi03@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nContact Number: ${contact_number}\nWork Subject: ${work_Title}\nWork Description: ${desc}`,
    };

    // Use the transporter to send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Email sent:', info.response);
        res.status(201).json({ message: 'Contact form submitted successfully!' });
      }
    });
  } catch (error) {
    console.error('Error submitting contact form', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
