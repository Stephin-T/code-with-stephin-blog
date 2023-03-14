
import React, { useEffect, useState } from 'react';
import classes from "./contact-form.module.css";
import Notification from '../ui/notification';

async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),

    headers: {
      "Content-Type": "application/json"
    },

  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
}

function ContactForm() {

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState("");    //pending, success, error
  const [requestError, setRequestError] = useState("");

  useEffect(()=>{
    if(requestStatus==="success" ||  requestStatus==="error" ){
     const timer = setTimeout(()=>{
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
           
      return ()=>clearTimeout(timer); //its a cleanup function "for re-run if it have ongoing timer on process"
    }
  }, [requestStatus])

  async function sendMessageHandler(event) {

    event.preventDefault();

    setRequestStatus("pending");
    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage
      });

      setRequestStatus("success");

    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }

    setEnteredEmail("");
    setEnteredName("");
    setEnteredMessage("");

  }

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending...",
      message: "Have a good day:)"
    }
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Woo-hoo!🥳",
      message: "Message sent!"
    }
  }
  if(requestStatus==="error") {
    notification ={
      status: "error",
      title: "Oops😢!",
      message: requestError
    }
}



  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={event => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={event => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea
            id='message'
            rows='5'
            required
            value={enteredMessage}
            onChange={event => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  )
}

export default ContactForm;