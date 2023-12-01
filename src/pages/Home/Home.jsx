import Navbar from "../../components/Navbar/Navbar";
import Hero from "./Hero/Hero";
import Roadmap from "./Roadmap/Roadmap";
import Story from "./Story/Story";
import Bullish from "./Bullish/Bullish";
import Team from "./Team/Team";
import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";
import Collection from "./Collection/Collection";

const Home = () => {
  return (
    <>
      <Navbar currentTab="home" />
      <Hero />
      <Collection />
      <Bullish />
      <Story />
      <Roadmap />
      <Team />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
