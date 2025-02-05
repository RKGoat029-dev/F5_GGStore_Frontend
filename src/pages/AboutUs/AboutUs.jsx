import "./about-us.css";
import Header from "../../components/molecules/Header/Header.jsx";
import Footer from "../../components/molecules/Footer/Footer.jsx";
import about1 from "../../assets/icon/about-1.png"
import about2 from "../../assets/icon/about-2.png"

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="mx-auto px-4 py-8 text-center flex flex-col md:flex-row items-center min-h-screen">
      <img src={about1} alt="Miller" className="w-1/4 md:w-1/5 h-100 object-contain aspect-auto mr-4 rounded-md" />
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Sobre Nuestro Proyecto</h2>
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          <p>Bienvenidos a GG Store, una tienda de videojuegos creada por y para gamers. Nuestro nombre proviene de la expresión "Good Game" (buen juego), un término usado en la comunidad gamer para reconocer la deportividad y el buen desempeño, sin importar el resultado de la partida.</p>
          <p>En GG Store, ofrecemos una experiencia de compra moderna y eficiente, respaldada por tecnologías como React, Java con Spring Boot y MySQL, asegurando rapidez, seguridad y escalabilidad. Nuestro objetivo es brindar a los jugadores acceso a los mejores títulos, accesorios y productos relacionados con el gaming, en una plataforma innovadora y de alto rendimiento.</p>
          <p>Únete a nuestra comunidad y lleva tu pasión por los videojuegos al siguiente nivel. ¡Porque cada partida cuenta! </p>
        </div>
      </div>
      <img src={about2} alt="Antonio" className="w-1/4 md:w-1/5 h-100 object-contain aspect-auto rounded-md " />
    </div>
      <Footer />
    </>
  )
}

export default AboutUs