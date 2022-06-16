import PageSplitImage from "../Components/PageSplitImage";
import styles from '../styles/Home.module.css'

const Movies = () => {
  const firstItem = (
    <>
    <h1>HUBERT GREGG  FILMS</h1>
        <p className={styles.page__quote}><strong>Hubert Recalls: </strong> 
          <i>
             During our stay in Athens there had been a party at which I had sat at the piano and sung some of my songs. They were admired by the producer Betty Box, so when I heard that she needed a song for Brigitte to sing in the film I set to work. Probably because of the warmth of my feeling for Brigitte the whole process took no longer than five minutes. The song had one simple chorus only: Do you love me ? Je ne sais pas, darling, I don't know ? was what it said - which might have been what I was wondering.
            </i>
        </p>
        <section>
            <p>
              Betty was pleased with the song and accepted it and next day, as I walked into the Pinewood bar at lunch time, Brigitte came running over to me. 'Hubert !' she said, pronouncing it in the French way [which I must confess made it sound better than Rupert], ' La chanson est tout ce qu'il y a de plus mignon. Et toi aussi !' Then she threw her arms round me and gave me a long and beautiful kiss. Not surprisingly this was telegraphed all over the studio but I didn't mind. A good deal of laughter came my way, especially as 'Mr. Archer' as portrayed in the movie was a very unlikely opposite number to Brigitte, though not as unlikely as Dirk Bogarde.
            </p>
        </section>
    </>
)

  const pageContent = (
    <>
      <section>
      <h1>OTHER FILMS</h1>
      <ol>
        <li>DOCTOR AT SEA (FOR WHICH HE ACTED & WROTE THE MUSIC)</li>
        <li>IN WHICH WE SERVE</li>
        <li>SIMON AND LAURA</li>
        <li>AFTER THE BALL</li>
        <li>FINAL APPOINTMENT THE MAGGIE</li>
        <li>DISNEY’S THE STORY OF ROBIN HOOD</li>
        <li>SVENGALI</li>
        <li>STARS IN YOUR EYES</li>
        <li>AFTER THE BALL</li>
        <li>29 ACACIA AVENUE</li>
        <li>VOTE FOR HUGGETT</li>
        <li>THE ROOT OF ALL EVIL</li>
        <li>THE THIRD VISITOR</li>      
      </ol>
    </section>
    </>
  )
  return (
     <PageSplitImage 
      bgImage={styles.movies}
      heading="Robin Hood"
      subHeading="starring Hubert Gregg as Prince John"
      firstItem={firstItem}>{pageContent}</PageSplitImage>
  )
};

export default Movies;
