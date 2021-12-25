import sgMail from '@sendgrid/mail';
import config from 'config';
import { ContactQuery } from '../types/contactus.type';

const sgKey = config.get('SG_KEY') as string;

sgMail.setApiKey(sgKey);

export default function sendEmail(contactQuery: ContactQuery) {
    const msg = {
        to: 'safifma@gmail.com',
        from: 'admin@leganix.co',
        subject: 'Leganix Query',
        text: 'You have received a query from someone.',
        html: `<h3>Name: </h3><p><strong>${contactQuery.name}</strong></p>
            <br />
            <h3>Surname: </h3><p><strong>${contactQuery.surname}</strong></p>
            <br />
            <h3>Email: </h3><p><strong>${contactQuery.email}</strong></p>
            <br />
            <h4>Message:</h4>
            <br />
            <p>${contactQuery.message}</p>
        `,
    };

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}
