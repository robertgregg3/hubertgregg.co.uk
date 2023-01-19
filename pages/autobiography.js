import React from 'react'
import PageSplitImage from "../Components/PageSplitImage";
import styles from '../styles/Home.module.css';
import Image from 'next/image'


const Radio = () => {
    const firstItem = (
        <>
        <h1>Hubert Gregg : read his autobiograpy and discover how he created several outstanding careers in showbusiness.</h1>
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
            </section>
        </>
    )

    const pageContent = (
        <>
           <section>
                <p>
                    His favourite stage part next to Hamlet was as Hugh Walford in the William Douglas Home comedy THE SECRETARY BIRD which he directed and played in, on a 40 week national tour. Film appearances included DOCTOR AT SEA (for which he wrote the score), THE MAGGIE, SIMON AND LAURA, IN WHICH WE SERVE, and as Prince John in Walt Disney's THE STORY OF ROBIN HOOD.
                </p>
                <p className={styles.page__quote}>
                    <i>In his Autobiograpy Hubert Gregg tells how he came to write the famous song Maybe it's Because I'm a Londoner.</i>
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
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="blank">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="8G443HEVPVR2W" />
                    <input type="image" src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-150px.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online." />
                    <Image alt="" border="0" src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-150px.png" width="1" height="1" />
                </form>
        </section>
        </>
      )
  return  (
    <>
     <PageSplitImage 
      bgImage={styles.autobiography}
      splitImage={true}
      heading="'Maybe it's Because'"
      subHeading="Hubert Gregg: 'A fascinating autobiograpy of His Life'"
      firstItem={firstItem}>
        {pageContent}
      </PageSplitImage>
    </>
  )
}

export default Radio