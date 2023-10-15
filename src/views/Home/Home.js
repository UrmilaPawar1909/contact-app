//#ff471a
//#ff8566
//#ffd6cc
import React, { useState } from "react";
import "./Home.css";
import Contactcard from "../../components/Contactcard/Contactcard";
import showToast from 'crunchy-toast';

function Home() {
    const [contacts, setContacts] = useState([
        {
            name: 'Ram',
            contact: '9249565625',
            email: 'ramransing@gmail.com'
        },
        {
            name: 'Sham',
            contact: '9564785458',
            email: 'shamransing@gamil.com'
        },
        {
            name: 'Kartik',
            contact: '6584589613',
            email: 'kartikpawar@gmail.com'
        },
        {
            name: 'Komal',
            contact: '6894512877',
            email: 'komalpawar@gmail.com'
        },
        {
            name: 'Urmila',
            contact: '8466235562',
            email: 'urmilapawar@gmail.com'
        }
    ])
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const addContact = () => {
        const obj = {
            name: name,
            email: email,
            mobile: mobile
        }
        setContacts([...contacts, obj]);

        showToast('Contact added successfully');
        setName('');
        setEmail('');
        setMobile('');
    };

    return (
        <>
            <h1 className="app-title">📞Contact App </h1>
            <div className="app-body">
                <div className="contacts-container">

                    <h2 className="container-names"> Show Contacts</h2>
                    {
                        contacts.map((contact, index) => {
                            return <Contactcard
                                key={index}
                                name={contact.name}
                                contact={contact.contact}
                                email={contact.email}
                            />
                        })
                    }
                </div>

                <div className="contacts-add-container">

                    <h2 className="container-names" >Add Contact</h2>
                    <
                        input type='text'
                        placeholder='Name'
                        className='user-input'
                        onChange={
                            (e) => {
                                setName(e.target.value);
                            }
                        }
                    />
                    <
                        input type='email'
                        placeholder='Email'
                        className='user-input'
                        onChange={
                            (e) => {
                                setEmail(e.target.value);
                            }
                        }
                    />
                    <
                        input type='text'
                        placeholder='Mobile'
                        maxLength={10}
                        className='user-input'
                        onChange={
                            (e) => {
                                setMobile(e.target.value);
                            }
                        }
                    />

                    <button className='add-contact-btn' onClick={addContact} > Add Contact </button>


                </div>

            </div>

        </>
    )
};

export default Home