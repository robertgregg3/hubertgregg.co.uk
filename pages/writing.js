import React from 'react'
import PageSplitImage from "../Components/PageSplitImage";
import styles from '../styles/Home.module.css'

const Radio = () => {
    const firstItem = (
        <>
        <h1>Agatha Christie's Play The Mousetrap: it's biography, direction, creation, and success. written by Hubert Gregg</h1>
            <p className={styles.page__quote}><i>
                Writing books was a typically creative venture Hubert involved himself with and in " Agatha Christie and all that Mousetrap " he tells of how he directed and to a lesser extent acted in ' Christie ' plays including ' The Hollow ' and more famously ' The Mousetrap ' Here's how the association began:
            </i>
            </p>
            <section>
                <p>
                    She had adapted one of her books - ' The Hollow ' it was called - for the stage and her agent had offered it to a manager named Bertie Meyer who had presented the odd Christie play before. Bertie was not in funds and was given a time ultimatum. Saunders bided his; and after the expiry stepped in and bought ' The Hollow '.
                </p>
                <p>
                  It wasn't a happy engagement. First there was the luncheon at the Carlton at which I was to be approved of by Agatha as a director, her tenuous links with the theatre to date hardly qualifying her to be a judge, I thought. Saunders, ever with a mind on the budget, had also asked me to play the part of Dr. Cristow; with a director's percentage - albeit a lower-than-usual one - in hand, an actor might not be too demanding?.
                </p>
            </section>
        </>
    )

    const pageContent = (
        <>
           <section>
                <p>
                    “One thing ...” said Saunders, “Christie doesn't know about your playing Cristow, we mustn't spring it on her. She's never heard of you.”
                </p>
                <p>Bloody hell!</p>
                <p>I wrote the following in my book: All That Mousetrap.</p>
                <p>
                    'The Carlton was the venue. It isn't there any longer. I met Saunders early in the bar. He was spruce and bursting with nerves, we both were. “I've told the barman,” he said, “to bring doubles every time I order singles.”   
                </p>
                <p>“Christie a bit of a boozer?” I asked.</p>
                <p>“No, you fool, they're for us. Don't forget, now. A lot depends on this lunch.”</p>
                <p>
                    I made two gaffes during the meal - major ones. Speaking of ' Black Coffee ' I announced that I preferred the book. “It never was a book,” said Christie, champing her way through a mound of food; I never saw a woman eat so much. Then I said, casually, that I didn't think there would be too much of a problem playing and directing. Christie was at the ice-cream, a treble portion but stopped in mid-spoon. “Playing?”                
                </p>
                <p>
                    “Shit,” I thought. “Cristow,” I said. Throughout I had felt like a schoolboy having his exercise corrected.</p>
                <p>
                    Victory it was, undoubtedly. We opened at the Fortune Theatre in Festival of Britain year, it was Saunders' shrewd idea that people returning over the river would find the Fortune to hand and were a resounding hit.
                </p>
                <p>
                More details of Hubert's other compositions as well as his experiences Acting in Movies, on the stage and also directing for the stage can be found in his recently published Autobiography. Only available online through this website.
                </p>
          </section>
        </>
      )
  return  (
    <>
     <PageSplitImage 
      bgImage={styles.writing}
      splitImage={true}
      heading="How The Mousetrap"
      subHeading="became a decades long success story."
      firstItem={firstItem}
      children={pageContent} />
    </>
  )
}

export default Radio