import banner from "../../../assets/icon/banner-2.png"
import "./Banner.css"

function Banner() {
  return (
    <div>
      <img className="banner-logo w-500 h-250 rounded-lg" src={banner} alt="" />
      <p className="product-text font-bold text-3xl text-center mb-16">Nuestros Productos</p>
    </div>
    
  )
}

export default Banner
