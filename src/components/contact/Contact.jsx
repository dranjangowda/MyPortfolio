import "./contact.css";
import { useContext } from 'react';
;

export const Contact = () => {
    return (
        <section id="contactID" className="section-contact" >
        <div className="contact">
            <div className="form">
            <h1 className="contact-head">Let's talk</h1>
                <input className="in-box" type="text" placeholder="Name" /><br/>
                <input className="in-box" type="text" placeholder="Email" /><br/>
                <input className="in-box" type="text" placeholder="Subject" /><br/>
                <textarea className="in-box" placeholder="Message..." /><br/>
                <button className="form-submit">Submit</button>
            </div>
        </div>
        </section>
    )
}