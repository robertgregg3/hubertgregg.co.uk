import Page from "../Components/Page";
import Head from "next/head";
import styles from '../styles/Home.module.css'

const About = () => {
  const pageContent = (
    <>
      <h1>Welcome to Hubert Gregg's website</h1>
      <section>
        <h3>Personal details:</h3>
        <p>
          Born: 19th July 1914 <br />
          Educated: St Dunstan's College and the Weber Douglas Academy of Dramatic Arts<br />
        </p>
        <h3>Marriages</h3>
        <p>
          Zoe Gail (daughter Stacey)<br />
          Pat Kirkwood<br />
          Carmel Lytton (1980 - one son Robert and one daughter Katherine)
        </p>
        <h3>Grandchildren</h3>
        <p>
          Luke Newton Mason <br />
          Grace Carilyn Gregg<br />
          Mia Rose James <br />
          Mary James
        </p>
        <hr />
      </section>
      <section>
        <h2>Huberts Career: How it all began</h2>
        <p>
          As a fourteen year old schoolboy Hubert played DUNOIS in George Bernard Shaw’s  ST. JOAN and HAMLET at the age of 18. Thereafter in his professional life Shakespeare and Shaw seemed to go very much hand in hand. In his autobiography he explains that it was while playing a range of Shakespeare parts at the Open Air Theatre in Regent's Park that he met Shaw for the first time when he created the role of The Black Prince in Shaw's one-act play THE SIX OF CALAIS. He recalled that nominally the play was directed by Robert Atkins but in fact, Shaw directed both the play and Atkins! It was, he says, an experience that stayed with him.
        </p>
        <p>
          Many years passed during which Shaw and Shakespeare took second place to Terence Rattigan when he played in FRENCH WITHOUT TEARS on Broadway and in London.   His performance in Rattigan’s WHILE THE SUN SHINES in London occupied more than four years.  </p>
        <p>
          His first song, I’M GOING TO GET LIT UP WHEN THE LIGHTS GO UP IN LONDON was written in 1940 but became a hit when it was sung by his first wife, Zoe Gail, in STRIKE A NEW NOTE  at the Prince of Wales Theatre.  There followed a period of writing music and lyrics. One of his best known songs  MAYBE IT'S BECAUSE I'M A LONDONER was sung by Bud Flanagan (Flanagan and Allen) in a show called TOGETHER AGAIN at the Victoria Palace in 1947.
        </p>
        <p>
          He starred, with his second wife Pat Kirkwood, in his first musical, CHRYSANTHEMUM, at the Prince of Wales and Apollo Theatres.    In 1968 he played his first season at the Chichester Festival and in 1971 returned there to play Britannus to John Gielgud's Caesar in Shaw's CAESAR AND CLEOPATRA amongst other roles.
        </p>
        <p>
          He loved playing Hugh Walford in the William Douglas Home comedy THE SECRETARY BIRD which he directed and played in, on a 40 week national tour.
        </p>
        <p>
          He appeared in many films during his career.   However, he was most well known for presenting his own radio programme THANKS FOR THE MEMORY on BBC RADIO 2 , playing 'vintage' records from the 'Square Chair' which lasted thirty years.   During that time he wrote and presented several popular series under the 'nostalgia' banner, his most well-remembered being a 40-week series on THE LONDON THEATRES.  He wrote a musical version of Jerome K Jerome’s THREE MEN IN A BOAT, with himself playing J, Leslie Phillips as George and Kenneth Horne as Harris, which is still playing on BBC More Four.
        </p>
        <p>
          In 1981 Hubert Gregg was given the Freedom of The City of London and in 2003 he received an MBE for Services to Music.
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
        <meta name="robots" content="all" />
      </Head>
     <Page 
      bgImage={styles.home}
      heading="Thanks for the memories!"
      subHeading="Learn about the singer/songwrite/actor/composer and more in the new autobiography">
        {pageContent}
      </Page>
    </>
  )
};

export default About;
