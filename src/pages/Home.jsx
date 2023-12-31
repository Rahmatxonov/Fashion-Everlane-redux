import Header from "../components/header/Header";
import Nature from "../components/nature/Nature";
import Navbar from "../components/navbar/Navbar";
import Shopping from "../components/shop/Shopping";
import StyleCard from "../components/styleCard/StyleCard";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Shopping />
      <StyleCard />
      <Nature />
    </>
  );
};

export default Home;
