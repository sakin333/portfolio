const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(cors())
const PORT = process.env.PORT || 5000; // Use PORT environment variable or default to 5000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const sentEmails = {}

app.post('/send-email', async (req, res) => {
    try {
        const { name, email, project } = req.body;

        if(sentEmails[email]) {
            return res.status(400).send('Email already sent from this address')
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.GMAIL_USER,
            subject: 'New Project Inquiry',
            text: `Name: ${name}\nEmail: ${email}\nProject: ${project}`,
        };

        const info = await transporter.sendMail(mailOptions);
        sentEmails[email] = true
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Email could not be sent');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
