import Head from "next/head";
import Header from "./../Components/Header";
import styles from "../styles/Home.module.css";
import ContactForm from "../Components/ContactForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hubert Gregg's Website</title>
        <meta
          name="Keywords"
          content="Hubert Gregg - Author, Composer, Actor, Writer, Playwright."
        />
        <meta
          name="google-site-verification"
          content="Ix7ZYTzNKw8oQMZs1Fm_O2q3pztSPnHUcN1zD3lKgz8"
        />
      </Head>
      <Header />
      <div className={styles.home__hero}>
        <div className={styles.home__heroLeft} />
        <div className={styles.home__heroRight}>
          <div className={styles.home_message}>
            <h1 className={styles.home_message_title}>Welcome!</h1>
            <p>
              Our brand new website is coming soon early 2022. To communicate
              with us in the mean time please use the form below
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
