import React from 'react'
import PageSplitImage from "../Components/PageSplitImage";
import styles from '../styles/Home.module.css'

const Radio = () => {
    const firstItem = (
        <>
        <h1>Thanks for the Memory on BBC Radio 2 with Hubert Gregg</h1>
            <p className={styles.page__quote}><i>
                One Telephone call was all it took to start 35 years of presenting ' Thanks For The Memory ' for the BBC:
            </i>
            </p>
            <section>
                <p>
                    The BBC. telephoned me with an offer. Ever since the astonishing acceptability to the public of ' A Square Deal ', which by now had run its seven-year course, one presenter after another had leapt onto the nostalgic band wagon for a season in the yesterday sun. I dare say I should have been flattered by this imitation but I couldn't see it in a generous light.
                </p>
                <p>
                    One presenter, of a new series was an older associate named Gale Pedrick who was a free-lance researcher and broadcaster. His particular idea was to go farther back than I did on ' A Square Deal ', to Victorian memories, using Archive snippets that were attractive enough in themselves but to an audience older than I would wish for my own broadcasting. I cursed poor Gale at first but was full of remorse for this when I learned that, soon after the launch of his series, he had collapsed and died at the Tube Station at 0xford Circus. His producer, one Sheila Anderson, now approached me to take over.
                </p>
            </section>
        </>
    )

    const pageContent = (
        <>
           <section>
                <p>
                    My first instinct was to refuse the lady as politely as I could but, following my second, I agreed; sensing that I might get away with making the odd change in the format. So began my renewed association with broadcast nostalgia which would continue over three or more decades.
                </p>
                <p>
                    As the years sped by I was able, under a number of different producers, to modify the content of the programmes. ' The Robin's Return ', played on a Victorian upright piano, no longer came out of the Archive Department as frequently; in fact it didn't come out at all. We substituted my old ' Square Deal ' theme, with ' Time Was '
                </p>
                <p>
                    Phyllis had been producing ' Down Your Way ' very successfully for twenty-five years and was devastated to be told that she would now be producing me instead. Smarting as she was from her summary transfer, she has confessed to hating the sight of me when I walked into her office for the first time but this feeling lasted only until our discovery - a serendipity if ever there was one -that we had mountains in common; respect for professionalism, a liking for the best in popular words and music and the writers and performers of them; a refusal to suffer fools gladly [coupled with a firm belief that it was for these that rules - especially BBC. rules - were made]; and above all, laughter.
                </p>
                <p>
                    More details of Hubert's other compositions as well as his experiences Acting in Movies, and also directing for the stage can be found in his recently published Autobiography. Only available online through this website.
                </p>
          </section>
        </>
      )
  return  (
    <>
     <PageSplitImage 
      bgImage={styles.radio}
      splitImage={true}
      heading="Thanks for the Memory..."
      subHeading="...hosted by Hubert Gregg for 35 years on BBC Radio 2"
      firstItem={firstItem}>
        {pageContent}
      </PageSplitImage>
    </>
  )
}

export default Radio