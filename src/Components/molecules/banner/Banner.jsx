import banner from "../../../assets/icon/banner-3.png"
import "./Banner.css"

function Banner() {
  return (
    <>
      <div className="w-full">

        <div className="relative w-full h-[700px]  rounded-md">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-full object-cover mb-5"
          />

        </div>
        <div className="text-center py-16 px-4">
          <h2 className="product-text text-4xl font-bold ">Nuestros Productos</h2>
          
        </div>
      </div>
    </>
  )
}

export default Banner
