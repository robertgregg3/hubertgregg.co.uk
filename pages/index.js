import Page from "../Components/Page";
import Head from "next/head";
import styles from '../styles/Home.module.css'

const About = () => {
  const pageContent = (
    <>
      <h1>Welcome to Hubert Gregg's website</h1>
      <p className={styles.page__quote}><i>
        Hubert Gregg started his showbusiness career early and began by acting in plays, here's how it all began:
      </i>
      </p>
      <section>
        <p>
          As a fourteen year old schoolboy Hubert Gregg played DUNOIS in ST. JOAN and HAMLET at eighteen. Thereafter in his professional life Shakespeare and Shaw seemed to go very much hand in hand. In his autobiograpy he explains; It was while playing a range of Shakespeare parts at the Open Air Theatre in Regent's Park that he met Shaw for the first time and created the role of The Black Prince in Shaw's one-act play THE SIX OF CALAIS. In his autobiography he recalls that nominally the play was directed by Robert Atkins but in fact, Shaw directed both the play and Atkins! It was, he says, an experience that stayed with him.
        </p>
        <p>
          Many years passed during which Shaw and Shakespeare took second place to Terence Rattigan (FRENCH WITHOUT TEARS on Broadway and in London and WHILE THE SUN SHINES in London occupied more than four years). Agatha Christie took up quite a bit of time too. Hubert Gregg directed five of her plays including the first theatre success THE HOLLOW and, for seven years, THE MOUSETRAP. There followed a period of writing music and lyrics. His two best known songs are MAYBE IT'S BECAUSE I'M A LONDONER and I'M GOING TO GET LIT UP WHEN THE LIGHTS GO UP IN LONDON. He starred in his first musical, CHRYSANTHEMUM, at the Prince of Wales and Apollo Theatres in 1958/9. In 1968 he played his first season at Chichester and in 1971 returned there to play Britannus to John Gielgud's Caesar in Shaw's CAESAR AND CLEOPATRA.
        </p>
        <p>
          His favourite stage part next to Hamlet was as Hugh Walford in the William Douglas Home comedy THE SECRETARY BIRD which he directed and played in, on a 40 week national tour. Film appearances included DOCTOR AT SEA (for which he wrote the score), THE MAGGIE, SIMON AND LAURA, IN WHICH WE SERVE, and as Prince John in Walt Disney's THE STORY OF ROBIN HOOD.
        </p>
        <p>
          For more than thirty-five years he presented his own radio programme THANKS FOR THE MEMORY on BBC RADIO 2 , playing 'vintage' records from the 'Square Chair'. During that time he wrote and presented several popular series under the 'nostalgia' banner, his most well-remembered being a 40-week series on THE LONDON THEATRES.
        </p>
        <p>
          In 1981 Hubert Gregg was given the Freedom of The City of London for MAYBE IT'S BECAUSE I'M A LONDONER and in 2003 he received an MBE for Services to Music.
        </p>
        <p>
          More details of other compositions as well as his experiences Acting in Movies, on the stage and also directing for the stage can be found in his recently published Autobiography. Only available online through this website.
        </p>
      </section>
    </>
  )
  return (
    <>
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
     <Page 
      bgImage={styles.home}
      heading="Thanks for the memories!"
      subHeading="Learn about the singer/songwrite/actor/composer and more in the new autobiography"
      children={pageContent} />
    </>
  )
};

export default About;
