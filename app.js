
const  sgMail=require('@sendgrid/mail')

const API_KEY=
'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';

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
