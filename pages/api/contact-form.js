export default async function mainMail(req, res) {
  const { email, name, message } = req.body;

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SECRETCHEF_SG);
  const msg = {
    to: process.env.EMAIL,
    from: process.env.GMAIL_USER,
    subject: 'New Message From Contact Form',
    html: `You received a message from:
    Name: ${name}
    Email: ${email}
    Message: ${message}`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log('email sent');
    })
    .catch((err) => {
      console.log(err);
    });

  res.status(200);
}
