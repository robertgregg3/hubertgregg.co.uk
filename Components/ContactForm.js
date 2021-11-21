import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "../styles/Form.module.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqkwoele");
  if (state.succeeded) {
    return (
      <p>
        Thanks for your message. We will get back to you as soon as possible.
      </p>
    );
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input id="name" type="name" name="name" placeholder="name" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <input id="email" type="email" name="email" placeholder="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" placeholder="How can we help?" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>
  );
};

export default ContactForm;
