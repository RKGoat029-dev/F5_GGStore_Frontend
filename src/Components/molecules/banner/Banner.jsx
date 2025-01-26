import banner from "../../../assets/icon/banner.png"

function Banner() {
  return (
    <div>
      <img className="banner-logo w-500 h-150" src={banner} alt="" />
      <p className="product font-bold text-3xl text-center">Nuestros Productos</p>
    </div>
    
  )
}

export default Banner
