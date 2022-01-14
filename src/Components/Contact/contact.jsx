import "./contact.scss";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const formdata = useRef();
    const sendMessage = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_j3nl5nh', 'template_zpces2k', formdata.current, 'user_x35yMAyCgCX3Q96XsOgGN')
            .then((result) => {
                alert("Thanks For Connecting!");
            }, (error) => {
                console.log(error.text);
            });

    }
    return (
        <div className="contact" id="contact">
            
            <div className="left">
                <img src="/assets/contact.png" className="banner" alt="banner-contact"/>
                </div>
            <div className="right">
                <h2>Love to Connect with New People!</h2>
                <form onSubmit={sendMessage} ref={formdata}>
                <input className="input" type="name" name="name" placeholder="  Name" />
                <input className="input" type="email" name="email" placeholder="  Email" />
                    <textarea className="message" name="message" placeholder=" Mesage"></textarea>
                    <button className="send-btn">Send</button>
                </form>
                </div>
            
        </div>
        );
}
export default Contact;