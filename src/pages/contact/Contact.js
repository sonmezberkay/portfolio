import { faClipboard, faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Contact.module.css";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState, useRef } from "react";

import emailjs from 'emailjs-com';


const Contact = () => {

  const email = 'berkaysonmezw@gmail.com';
  const phoneNumber = '+48 510 576 852';

  const [phoneCopied, setPhoneCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const phoneCopyClickHandler = () => {
    setPhoneCopied(true);
    setTimeout(() => {
      setPhoneCopied(false)
    }, 2500);
  };
  const emailCopyClickHandler = () => {
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false)
    }, 2500);
  };

  const form = useRef();

  const emailSendHandler = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vla8sbu', 'template_tj0i3e9', e.target, '_nSw9jXhswm4dVVtF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };



  return (
    <div className={classes.container}>
      <div className={classes["contact-form"]}>
        <form onSubmit={emailSendHandler}>
        <h2>Contact me</h2>
          <div className={classes['form-top']}>
            <div className={classes.name}>
              <input type="text" id="name" required name="name" placeholder="Name" />
            </div>
            <div className={classes.email}>
              <input type="email" id="email" required name="email" placeholder="E-mail" />
            </div>
          </div>
          <div className={classes.subject}>
            <input type="text" id="subject" required name="subject" placeholder="Subject" />
          </div>
          <div className={classes.message}>
            <textarea type="text" id="message" required placeholder="Enter your message here..." name="message" />
          </div>
          <button className={classes.btn}>Send</button>
        </form>
      </div>
      <div className={classes["contact-details"]}>
        <div className={classes["contact-1"]}>
          <FontAwesomeIcon icon={faPhone} className={classes['contact-icon__phone']} />
           <h3 className={classes['phone-number']}>{phoneNumber}</h3>
           <CopyToClipboard text={phoneNumber}>
              {<button onClick={phoneCopyClickHandler} className={classes[`copy-button`]}><FontAwesomeIcon icon={faClipboard} /></button>}
            </CopyToClipboard>
            <>
            {phoneCopied && <p className={classes['copy-notification-phone']}>Phone number copied to the clipboard!</p>}
            </>
        </div>
        <div className={classes["contact-2"]}>
          <FontAwesomeIcon icon={faEnvelope} className={classes['contact-icon__mail']} />
          <h4 className={classes['e-mail']}>{email}</h4>
          <CopyToClipboard text={email}>
              <button onClick={emailCopyClickHandler} className={classes['copy-button']}><FontAwesomeIcon icon={faClipboard} /></button>
           </CopyToClipboard>
           {emailCopied && <p className={classes['copy-notification-email']}>Email copied to the clipboard!</p>}
        </div>
        <div className={classes["contact-3"]}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={classes['contact-location']} />
          <h4 className={classes.location}>Poznań / Poland</h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
