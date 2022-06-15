import Page from "../Components/Page";

const About = () => {
  const pageContent = (
    <>
      <p>Some sample text</p>
    </>
  )
  return (
    <>
     <Page 
      heading='About Hubert Gregg' 
      subHeading='Learn more about this extrodinary man'
      children={pageContent} />
    </>
  )
};

export default About;
