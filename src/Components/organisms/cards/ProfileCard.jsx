import { useState, useEffect } from "react";
import { readProductDB } from "../../../service/ProductService";
import { Card, CardHeader, CardBody, CardFooter, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ProfileCard = () => {

  const [products, setProducts] = useState([]);

  const getAllProductsFromDB = async () => {
    const data = await readProductDB();
    setProducts(data);
  };

  useEffect(() => { getAllProductsFromDB(); }, []);

  return (
    <>
      {
        products.map((product) => (
          <div key={product.id} className="flex justify-center items-center m-8">
            <Card className="max-w-sm w-full bg-white shadow-lg">
              <CardHeader className="p-0">
                <div className="h-64 w-full overflow-hidden">
                  <img
                    src={product.imageURL}
                    alt={product.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </CardHeader>

              <CardBody className="px-6 py-4 space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                </div>

                <section className="flex flex-col items-center gap-2">
                  <p className="text-lg font-bold text-blue-600">{product.price}</p>
                  <p className="text-sm text-gray-600">{product.category}</p>
                </section>
              </CardBody>

              <CardFooter className="px-6 pb-6 pt-2">
                <Link to="/product-detail" className="w-full">
                  <Button className="w-full py-3 text-lg font-medium transition-colors duration-200 hover:bg-blue-700">
                    Read More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
    </>
  )
};

export default ProfileCard