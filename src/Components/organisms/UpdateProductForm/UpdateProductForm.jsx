import { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Button, Input } from "@material-tailwind/react";
import { updateProduct } from '../../../service/ProductService';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProductForm = () => {
  
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: id,
    name: "",
    price: "",
    categoryId: "",
    imageURL: ""
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/api/products/" + id)
    .then(res => setProduct(res.data))
    .catch(err => console.log(err))
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(`http://localhost:8080/api/products/${id}`, product)
    .then(navigate("/admin"));
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Card>
        <CardHeader 
          variant="gradient" 
          color="blue" 
          className="mb-4 grid h-28 place-items-center"
        >
          <h3 className="text-white text-2xl font-bold">Update Product</h3>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="mb-4">
              <Input
                type="text"
                name="name"
                label="Product Name"
                value={product.name}
                onChange={(e) => setProduct({...product, name:e.target.value})}
                required
              />
            </div>

            <div className="mb-4">
              <Input
                type="number"
                name="price"
                label="Price"
                value={product.price}
                onChange={(e) => setProduct({...product, price:e.target.value})}
                step="0.01"
                required
              />
            </div>

            <div className="mb-4">
              <Input
                name="categoryId"
                label="CategoryId"
                value={product.categoryId}
                onChange={(e) => setProduct({...product, categoryId:e.target.value})}
                step="0.01"
                required
              />
            </div>

            <div className="mb-4">
              <Input
                name="imageURL"
                label="ImageURL"
                value={product.imageURL}
                onChange={(e) => setProduct({...product, imageURL:e.target.value})}
                step="0.01"
                required
              />
            </div>

            <Button type="submit" color="blue" fullWidth>
              Update Product
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default UpdateProductForm;