import React from 'react';
import { ContactClass } from '../../models/contact.js'; // Recibe la clase creada en el fichero contact.js
import Contact from '../pure/contact.jsx';

const ContactContainer = ({ contact }) => {

    const people = new ContactClass('Yamil','Daza','dazayamil07@gmail.com',false);

    return (
        <div>
            <Contact contact={people}/>
        </div>
    );
};



export default ContactContainer;
