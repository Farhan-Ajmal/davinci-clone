import Hero from "../../components/hero";
import Reviews from "../../components/reviews";
import Contact from "../../components/contact";

const Home = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;
