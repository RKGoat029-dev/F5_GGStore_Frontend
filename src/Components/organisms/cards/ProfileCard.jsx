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
        <div key={product.id} className="card-content flex justify-center items-center">
          <Card className="w-96 card flex justify-center items-center">
            <CardHeader color="blue-gray" className="h-56">
              <img src={product.imageURL} alt={product.name} />
            </CardHeader>
            <CardBody>
              <div className="title">
                <h3>{product.name}</h3>
              </div>
              <section>
                <p className="price">{product.price}</p>
                <p className="category">{product.category}</p>
              </section>
            </CardBody>
            <CardFooter className="pt-5 card-footer">
              <Link to="/product-detail">
                <Button>Read More</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      ))}
    </>
)};

export default ProfileCard