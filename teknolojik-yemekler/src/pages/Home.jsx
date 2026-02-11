import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Campaigns from "../components/Campaigns";
import MenuHeader from "../components/MenuHeader";
import FoodGrid from "../components/FoodGrid";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Campaigns />
      <MenuHeader />
      <FoodGrid />
      <Footer />
    </>
  );
}

export default Home;
