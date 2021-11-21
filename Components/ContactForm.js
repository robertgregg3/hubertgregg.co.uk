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
      <label htmlFor="name" className="py-2 text-grey-darkest">
        Full Name
      </label>
      <input
        className="border py-2 px-3 text-grey-darkest"
        id="name"
        type="name"
        name="name"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="email" className="py-2 text-grey-darkest">
        Email Address
      </label>
      <input
        className="border py-2 px-3 text-grey-darkest"
        id="email"
        type="email"
        name="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label className="py-2 text-grey-darkest" htmlFor="message">
        How can we help?
      </label>
      <textarea
        className="border py-2 px-3 text-grey-darkest"
        id="message"
        name="message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-amazon_blue-light hover:bg-blue-900 text-white font-bold my-6 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
