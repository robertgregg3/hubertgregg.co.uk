import React from 'react'
import PageSplitImage from "../Components/PageSplitImage";
import styles from '../styles/Home.module.css'

const Radio = () => {
    const firstItem = (
        <>
            <section>
                <h1>BOOKS BY HUBERT GREGG</h1>
                <strong>APRIL GENTLEMAN</strong>
                <p>Published by  The London Museum Press</p>
                <strong>A DAY’S LOVING</strong>
                <p>published by Bachman and turner in 1974</p>
                <strong>AGATHA CHRISTIE AND ALL THAT MOUSETRAP</strong>
                <p>Published by William Kimber 1980</p>
                <strong>THANKS FOR THE MEMORY</strong>
                <p>Published by Victor Gollancz in 1983</p>
                <br />
                <hr />
                <br />
            </section>
            <section>
                <h1>PLAYS</h1>
                <ol>
                    <li>WE HAVE COMPANY</li>
                    <li>VILLA SLEEP FOUR</li>
                    <li>WHO’S BEEN SLEEPING</li>
                    <li>THE RUMPUS</li>
                    <li>DEAR SOMEBODY</li>
                </ol>
            </section>
        </>
    )

    const pageContent = (
        <>
           <section>
                <h1>TELEVISION PLAYS</h1>
                <strong>THE GREAT LITTLE TILLEY</strong>
                <p>(The story of Vesta Tilley)</p>
            </section>
                <br />
                <hr />
                <br />
            <section>
                <h1>SCREENPLAY</h1>
                <strong>AFTER THE BALL</strong>
                <p>(From The Great Little Tilley)</p>
          </section>
        </>
      )
  return  (
     <PageSplitImage 
      bgImage={styles.writing}
      splitImage={true}
      heading="How The Mousetrap"
      subHeading="became a decades long success story."
      firstItem={firstItem}>
        {pageContent}
      </PageSplitImage>
  )
}

export default Radio