import Page from "../Components/Page";
import styles from '../styles/Home.module.css'

const Movies = () => {
  const pageContent = (
    <>
      <h1>In Doctor at Sea ...what did Brigitte Bardot hate so much?</h1>
      <p className={styles.page__quote}><i>
        One of the most well known movies Hubert Gregg appeared in was Doctor at Sea which offered plenty of scope for high jinks:
      </i>
      </p>
      <section>
        <p>
         Doctor At Sea was a first feature comedy of no particular quality. The story was taken, very loosely, from one of the famous 'doctor' books by Gordon Ostlere who wrote as Richard Gordon. Mr. Archer, the Second Officer, was a part created for me in the Mr. Pusey (The Maggie) mould. When going ashore he wears plain clothes with a bowler hat and carries an umbrella. The film was fun to make since many of my friends were in it and the location was a warm release from the dreary English January of 1955.
        </p>
        <p>
        It was in this movie that I met and became attached to a nineteen-year-old French actress named Brigitte Bardot who was becoming known in France but was new to the British screen. She wasn't with us in the Mediterranean but joined us for the studio shooting. Brigitte was breath-takingly pretty and had a waist you could encircle with one arm. We barely met in the filming since she was mostly involved with Dirk Bogarde.
        </p>
        <p>
        During our stay in Athens there had been a party at which I had sat at the piano and sung some of my songs. They were admired by the producer Betty Box, so when I heard that she needed a song for Brigitte to sing in the film I set to work. Probably because of the warmth of my feeling for Brigitte the whole process took no longer than five minutes. The song had one simple chorus only: Do you love me ? Je ne sais pas, darling, I don't know ? was what it said - which might have been what I was wondering.
        </p>
        <p>
        Betty was pleased with the song and accepted it and next day, as I walked into the Pinewood bar at lunch time, Brigitte came running over to me. 'Hubert !' she said, pronouncing it in the French way [which I must confess made it sound better than Rupert], ' La chanson est tout ce qu'il y a de plus mignon. Et toi aussi !' Then she threw her arms round me and gave me a long and beautiful kiss. Not surprisingly this was telegraphed all over the studio but I didn't mind. A good deal of laughter came my way, especially as 'Mr. Archer' as portrayed in the movie was a very unlikely opposite number to Brigitte, though not as unlikely as Dirk Bogarde.
        </p>
        <p>
        More details of Hubert's other compositions as well as his experiences Acting in Movies, and also directing for the stage can be found in his recently published Autobiography. Only available online through this website.
        </p>
      </section>
    </>
  )
  return (
    <>
     <Page 
      bgImage={styles.movies}
      heading="Doctor at Sea"
      subHeading="starring Dirk Bogarde Brigitte Bardot and Hubert Gregg as Archer"
      children={pageContent} />
    </>
  )
};

export default Movies;
