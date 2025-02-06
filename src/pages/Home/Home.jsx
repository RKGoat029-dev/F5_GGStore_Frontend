import Header from "../../components/molecules/Header/Header.jsx";
import Footer from "../../components/molecules/Footer/Footer.jsx";
import "./home.css";
import Banner from "../../Components/molecules/banner/Banner.jsx";
import ProfileCard from "../../Components/organisms/cards/ProfileCard.jsx";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
        <div className="">
          <Header />
        </div>
        <Banner />
        <Outlet/>
        <ProfileCard />
        
        <Footer />
    </>
  );
};

export default Home