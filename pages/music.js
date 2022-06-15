import React from 'react'
import PageSplitImage from "../Components/PageSplitImage";
import styles from '../styles/Home.module.css'

const Radio = () => {
    const firstItem = (
        <>
        <h1>Song Lyrics Written by Hubert Gregg.</h1>
            <p className={styles.page__quote}><i>
                When ' Maybe it's because I'm a Londoner ' was written by Hubert Gregg he didn't suspect that it would lead him to many places, including getting him landed with a writ. He tells the story in his own words:
            </i>
            </p>
            <section>
                <p>
                    "I came to be grateful as the years passed that ' Maybe Its Because Im A Londoner ' was what is known in the business as a 'sleeper'. Songs that make an immediate splash are unlikely to stay a very long course. ' I'm Going To Get Lit Up ' was an exception because it would continue as a piece of wartime nostalgia but, in the main, a slow growth indicates a solid root.
                </p>
                <p>
                    One evening, in February 1947, Jack Hylton telephoned. He was about to bring the Crazy Gang back to the Victoria Palace in a show to be called 'Together Again' and asked me whether I had any songs that would suit Bud Flanagan. I said no at first. Fond  as I was of the Gang, all of whom I had met when they played the Palladium with Zoë, I felt that the material I was given to writing might be too sophisticated. Then I remembered the simple song I had written a year or so earlier and mentioned it. Can you come down to His Majesty's and play it over? he asked.
                </p>
            </section>
        </>
    )

    const pageContent = (
        <>
           <section>
                <p>
                    Jack thought the song might do. I wrote him a simple verse then and there and he said he would play the song to Bud and let me know. He also took for consideration another item called 'Ace High', a post-war 'buck-up' song of which Jack Priestley would have approved."
                </p>
                <p>
                    But that was only the beginning of the success of the song. Through a variety of sources it quickly became a household name, and even today people remember it with deep fondness. The phenomenon eventually led to Hubert being given the Freedom of the City of London. In his autobiography Hubert describes some of the events that occurred after the song appeared in the The Crazy Gang show Together Again:
                </p>
                <p>
                    The song was certainly helped by the fact that Together Again ran for four years but individual performers too gave it a welcome boost.
                </p>
                <p>
                    Jack Warner sang it ( see photo to the left ) and the producers of Dixon Of Dock Green chose it as their first theme music. Arthur Askey made the song popular in Australia, changing it to 'Maybe It's Because I'm From Liverpool', though how he went on from there I never did learn.
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
      bgImage={styles.music}
      splitImage={true}
      heading="Maybe it's Because"
      subHeading="I'm A Londoner"
      firstItem={firstItem}
      children={pageContent} />
    </>
  )
}

export default Radio