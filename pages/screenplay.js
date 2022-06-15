import React from 'react'
import PageSplitImage from "../Components/PageSplitImage";
import styles from '../styles/Home.module.css'

const Radio = () => {
    const firstItem = (
        <>
        <h1>Three Men in a Boat (to say nothing of the dog) Jerome K Jerome read by Hubert Gregg</h1>
            <p className={styles.page__quote}><i>
                Reading 'Three men in a boat' signalled a rare foray for Hubert Gregg into the world of Variety, however it was a great success as Hubert writes from his Autobiography:
            </i>
            </p>
            <section>
                <p>
                    It was Norman Wright who jump-started my life yet again. Norman was a BBC. producer of radio who happened to think highly of me. He telephoned to ask whether I would be in the second new series of programmes called ' Saturday Night On The Light '. Might he call and explain?
                </p>
                <p>
                    It was a continuing mixture of orchestral music, singing and speaking - a loose format that invited ideas and innovations. Last week, the first of these programmes had had Edith Evans reading from the Bard; had I suggestions about what I would like to do that might fit into such framework ? Suddenly - George directed my gaze to Jerome K Jerome's ' Three men In A Boat '.
                </p>
            </section>
        </>
    )

    const pageContent = (
        <>
           <section>
                <p>
                    I read some to Norman; then, because we were laughing so much, some longer pieces. This was it, we both decided and on the following Saturday I stood on the platform in the Concert Hall at Broadcasting House and read several of the stories from the book The reception was phenomenal.
                </p>
                <p>
                    The BBC. had taken over the Playhouse Theatre during wartime and were continuing to broadcast musical programmes from there. Henry Hall's Guest Night was one of the regular features, recorded in the morning with an audience. I marched into rehearsal, my Jerome under my arm, to encounter Max Miller who was topping the bill. Max, whom I had met during my forays as composer into the world of revue and Variety, greeted me warmly but with some surprise. What are you doing here, Hubert? he asked. I thought you were a straight actor.
                </p>
                <p>I'm reading from this, I said and showed him the volume.</p>
                <p>
                    Reading? said Max. Reading a book? I imagine he had paid handsomely for a script and I did appreciate that my way of making a crust on this particular morning might not appeal.
                </p>
                <p>
                    Jerome was a riot; Max walking up and down in the wings, stopping to watch, then walking again, wondering at this revolution in his establishment. Henry took me to lunch and, in the taxi, said that I should get on to the press to say I've offered a return date in three week's time for starters. It was news to me. I didn't get on to the press, they've been very good to me over the years but have always frightened the life out of me.
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
      bgImage={styles.screenplay}
      splitImage={true}
      heading="Three Men in a Boat,"
      subHeading="Jerome K Jerome, read by Hubert Gregg"
      firstItem={firstItem}
      children={pageContent} />
    </>
  )
}

export default Radio