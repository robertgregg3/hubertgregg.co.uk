import Page from "../Components/Page";
import styles from '../styles/Home.module.css'
import ContactForm from './../Components/ContactForm';

const Movies = () => {
  const pageContent = (
    <>
      <div className="contact-form">
        <ContactForm />
      </div>
    </>
  )
  return (
     <Page 
      bgImage={styles.contact}
      heading=""
      subHeading="">
        {pageContent}
      </Page>
  )
};

export default Movies;
