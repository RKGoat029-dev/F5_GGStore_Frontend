import "./about-us.css";
import Header from "../../components/molecules/Header/Header.jsx";
import Footer from "../../components/molecules/Footer/Footer.jsx";
import about1 from "../../assets/icon/about-1.png";
import about2 from "../../assets/icon/about-2.png";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="mx-auto px-4 py-8 text-center flex flex-col md:flex-row items-center min-h-screen">
        <img src={about1} alt="Miller" className="w-1/4 md:w-1/5 h-100 object-contain aspect-auto mr-4 rounded-md" />
        <div className="flex-1">
          <h2 className=" title-about text-4xl font-bold mb-4">Nuestra Pasión por los Videojuegos</h2>
          <p className="text-lg leading-relaxed">
            En GG Store, somos más que una tienda. Somos una comunidad de gamers apasionados que comparten tu amor por los videojuegos.
          </p>
          <p className=" text-about text-lg leading-relaxed">
            Nuestro objetivo es brindarte la mejor experiencia de compra, ofreciéndote los últimos lanzamientos, accesorios y todo lo que necesitas para disfrutar al máximo de tu hobby.
          </p>
          <h3 className="title-about-1 text-2xl font-semibold mt-4">¿Por qué GG Store?</h3>
          <ul>
            <li>Gran variedad de productos.</li>
            <li>Precios competitivos.</li>
            <li>Atención al cliente personalizada.</li>
            <li>Plataforma segura y confiable.</li>
          </ul>
          <p className="text-about-1 text-lg leading-relaxed">
            Únete a nuestra comunidad y descubre por qué GG Store es tu destino definitivo para los videojuegos.
          </p>
        </div>
        <img src={about2} alt="Antonio" className="w-1/4 md:w-1/5 h-100 object-contain aspect-auto rounded-md" />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;