import Header from "../../components/molecules/Header/Header.jsx";
import Footer from "../../components/molecules/Footer/Footer.jsx";
import "./home.css";
import Banner from "../../components/molecules/banner/Banner.jsx";
import ProfileCard from "../../components/organisms/cards/ProfileCard.jsx";
import Preloader from "../../components/molecules/gg-store/Preloader.jsx";

const Home = () => {
  return (
    <>
        <Header />
        <Banner />
        <ProfileCard />
        <Preloader/>
        <Footer />
    </>
  );
};

export default Home