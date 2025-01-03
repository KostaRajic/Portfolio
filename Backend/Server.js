/* eslint-disable no-undef */
/* eslint-disable no-undef */

const express = require('express')
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

const corsOptions = {
  origin: ['http://localhost:3000']
}

app.use(cors(corsOptions));


app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('<h1>HI</h1>')
})


app.post('/sendMail', async (req, res) => {
     const { name, email, message } = req.body
  console.log(req.body)


  res.status(200).json({ message: 'Email received successfully' });
  const transporter = nodemailer.createTransport({
    secure: true,
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: 'kosta.rajic.2@gmail.com',
    subject: `New message from ${name}`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully!' });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email.' });
  }
    });
    
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
    
    