import React from 'react';
import Nav from './Nav';
import styles from '../styles/Home.module.css';
import Footer from './Footer';
import footerStyles from '../styles/Footer.module.css';


const Page = ({ bgImage, heading, subHeading, children}) => {
  return (
    <>
        <header>
            <Nav />
        </header>
        <main>
            {heading && subHeading &&
                <div className={`${bgImage && `${bgImage} ${styles.hero}`}`}>
                    <div className={styles.hero__heading}>
                        <h1 className={styles.page__heading}>{heading}</h1>
                        <h5 className={styles.page__subHeading}>{subHeading}</h5>
                    </div>
                </div>
            }
            <div className={styles.main__content}>
                {children}
            </div>
        </main>
        <footer className={footerStyles.footer}>
            <Footer />
        </footer>
    </>
  )
}

export default Page