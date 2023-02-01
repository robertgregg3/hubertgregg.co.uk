import PageSplitImage from "../Components/PageSplitImage";
import styles from '../styles/Home.module.css'
import Page from './../Components/Page';

const Directing = () => {
  const firstItem = (
    <>
      <h1>HUBERT GREGG DIRECTOR</h1>
      <section>
        <p>
          Hubert Gregg directed Agatha Christie’s ‘The Hollow’ - her first stage success.  This was followed by ‘The Mousetrap’, the directing of which he turned down to appear in a play ‘To Dorothy a Son’ which held more allure for him at the time.   This was a decision he regretted all his life, and a decision that displeased Agatha who was very keen to have him direct the ’The Mousetrap’ because of his success with ‘the Hollow’.  However, he returned to directing, and directed several casts in ‘The Mousetrap’ for six years.  He later directed ‘The Unexpected Guest’ – another Christie Thriller.   This was followed by ‘ Rule of Three’ in 1958. 
        </p>
        <p>
          In 1970  Hubert branched out into solo performances, putting on one-man shows ranging from the lives of Shakespeare and Jerome K Jerome to music from the 1920’s, 30’s and 40’s.  His creation Words by Elgar, Music By Shaw was seen at the Edinburgh Festival in 1979.
        </p>
      </section>
    </>
  )
  return (
    <Page 
      bgImage={styles.directing}
      heading={' '}
      subHeading="Agatha Christie’s ‘The Hollow’ Directed by Hubert Gregg">
        {firstItem}
      </Page>
  )
};

export default Directing;
