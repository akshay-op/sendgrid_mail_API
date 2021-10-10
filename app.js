
const  sgMail=require('@sendgrid/mail')

const API_KEY=
'< paste sendgrid api key>';

sgMail.setApiKey(API_KEY)

const message={
  to:'akshay@supertext.ai',
  from:'akshayop277@gmail.com',
  subject:'Hello from apitest',
  text:"supertext"

};

sgMail.send(message)
.then(response=>console.log('email sent...'))
.catch(error=>console.log(error.message));
