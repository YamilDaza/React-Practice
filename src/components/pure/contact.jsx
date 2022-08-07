import React from 'react';
import PropTypes from 'prop-types';
import { ContactClass } from '../../models/contact';
import { useState } from 'react';

const estilo = {
    width:'100px',
    height:'50px',
    cursor:'pointer',
}

const Contact = ({ contact }) => {

    let [btn, setBtn] = useState(contact.online);

    /* const changeOnline = () => {
        console.log('Me diste modo online');
        setBtn(btn = true)
    } */

    const changeOffline = () => {
        return btn ? setBtn(btn = false) : setBtn(btn = true);
    }
    return (
        <div>
            <p>Nombre: {`${contact.names} ${contact.lastName}`}</p>
            <p>Correo: {contact.email}</p>
            <p>Online: {btn ? 'Contact available' : 'Contact not available'}</p>
            <button  onClick={changeOffline} style={estilo}>{btn ? 'OFF' : 'ON'}</button>
        </div>
    );
};


Contact.propTypes = {  
    contact : PropTypes.instanceOf(ContactClass),
};


export default Contact;
