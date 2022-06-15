import React from 'react';
import Nav from './Nav';
import styles from '../styles/Home.module.css';
import Footer from './Footer';


const PageSplitImage = ({ bgImage, firstItem, heading, subHeading, children}) => {
  return (
    <>
        <header>
            <Nav />
        </header>
        <main>
            <div className={styles.hero__container}>
                <div className={`${bgImage && `${bgImage} ${styles.heroSplitImage}`}`}>
                    <div className={styles.hero__heading}>
                        <h1 className={styles.page__heading}>{heading}</h1>
                        <h5 className={styles.page__subHeading}>{subHeading}</h5>
                    </div>
                </div>
                <div className={styles.firstItem}>
                    {firstItem}
                </div>
            </div>

            <div className={styles.main__content}>
                {children}
            </div>
        </main>
        <footer>
            <Footer />
        </footer>
    </>
  )
}

export default PageSplitImage