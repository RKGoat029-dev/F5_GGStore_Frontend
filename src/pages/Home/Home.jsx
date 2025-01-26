import Header from "../../components/molecules/Header/Header.jsx";
import ProfileCard from "../../components/organisms/cards/ProfileCard.jsx";
import Footer from "../../components/molecules/Footer/Footer.jsx";
import "./home.css";
import Banner from "../../components/molecules/banner/Banner.jsx";

const Home = () => {
  return (
    <>
        <Header />
        <Banner />
        <ProfileCard />
        <Footer />
    </>
  );
};

export default Home