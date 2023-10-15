import React from "react";
import "./Contactcard.css"

export default function Contactcard({name,contact,email}){
    return(
        <div className="contact-card">
            <p className="contact-name m-2"> {name}</p>
            <p className="contact-mobile m-2">{contact} </p>
            <p className="contact-email m-2"> {email}</p>

        </div>
    )
}