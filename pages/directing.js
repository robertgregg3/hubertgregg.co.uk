import Page from "../Components/Page";
import styles from '../styles/Home.module.css'

const Directing = () => {
  const pageContent = (
    <>
      <h1>Agatha Christie 's ' The Mousetrap ' was directed by Hubert Gregg for 6 successful years and is still going strong today.</h1>
      <p className={styles.page__quote}><i>
        A play like ' The Mousetrap ' doesn't just drop into your lap, you have to shape it and create it:
      </i>
      </p>
      <section>
        <p>
          The title of the new Christie whodunit, ' Three Blind Mice ', had to be changed because Emile Littler had another project with the same name and Peter Saunders asked me whether I had any ideas. In default of an offer from another management it looked like becoming a foregone conclusion that I would direct it. “Why don't you pinch the title of Hamlet's play?” I asked him. “What do you mean?” said Saunders.
        </p>
        <p>
          “Hamlet wrote a play to frighten the life out of his step-father,” I was explaining. “He called it ' The Mousetrap ' Peter seemed dubious; perhaps I shouldn't have mentioned 'Hamlet' which was by William Shakespeare who was known for not always filling theatres. A few days later we came to the same discussion. “Matthew Pritchard has suggested a name for " Three Blind Mice,” he said. Matthew Pritchard was Christie's nephew.
        </p>
        <p>“Oh, yes? What?”</p>
        <p>" The Mousetrap ,” he said.</p>
        <p>“Great minds,” I said. “I suggested that, if you remember.” I don't think he did.</p>
        <p>
          ' The Mousetrap ' it became - which fact, when the run of the whodunit began to extend itself ad absurdum, must have made it extremely difficult, if not impossible, for every actor who attempted the Dane .
        </p>
        <p>
          Was I going to direct it? There was an alternative. I had been nagging at Peter to send out a tour of 'To Dorothy - A Son', with me playing and directing and he had decided to do this. “I'm cutting my own throat," he said. “It means that not only will you not be able to direct ' The Mousetrap ' but I'll have to find another producer for Dan's radio programmes”.
        </p>
        <p>
         He did ,and so did I, but the bug had bitten deep and I chose the Roger McDougall play. In his book about the play Peter wrote of me, "It was an extraordinary decision and one, I think, that he later regretted." Certainly I would have been a richer man materially since, at the time of writing, the play is over half-century old with no sign of its ever being sprung. I wrote a note of apology to Agatha who sent me a warm missive in return:
        </p>
        <p>
         <i>'Dear Hubert,</i>
        </p>
        <p>
         <i>Yes, of course I'm furious with you for not directing The Play - it means, among other things, that I shall have to get used to a new producer ...'</i>
        </p>
        <p>
          <i>She thanked me for my work on ' The Hollow ' and wished me luck with ' To Dorothy - A Son '.</i>
        </p>
        <p>
          More details of Hubert's other compositions as well as his experiences Acting in Movies, also directing for the stage can be found in his recently published Autobiography. Only available online here.
        </p>
      </section>
    </>
  )
  return (
     <Page 
      bgImage={styles.directing}
      heading="Agatha Christie's ' The Mousetrap ' was"
      subHeading="... very different until Hubert made some suggestions...">
        {pageContent}
      </Page>
  )
};

export default Directing;
