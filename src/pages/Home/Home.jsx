import Header from "../../omponents/molecules/Header/Header.jsx";
import ProfileCard from "../../components/organisms/cards/ProfileCard.jsx";
import Footer from "../../components/molecules/Footer/Footer.jsx";
import "./home.css";

const Home = () => {
  return (
    <>
        <Header />
        <ProfileCard />
        <Footer />
    </>
  );
};

export default Home