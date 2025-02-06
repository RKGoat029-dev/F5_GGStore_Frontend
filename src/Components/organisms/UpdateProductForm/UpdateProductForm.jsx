import { useState, useEffect } from 'react';
import { 
  Card, 
  CardHeader, 
  CardBody, 
  Button, 
  Input,
 
} from "@material-tailwind/react";
import { useNavigate, useParams } from 'react-router-dom';
import { updateProduct } from "../../../service/ProductService.jsx";
import { useRef } from 'react';

const UpdateProductForm = () => {
  

const [products, setProducts] = useState([]);

const updateProductById = async (id, updatedProduct) => {
  const updating = await updateProduct(id, updatedProduct);
  setProducts((prevProducts) => prevProducts.map(
    (product) => (product.id === id ? updating : product)));
};

const navigate = useNavigate();

const { productId } = useParams();

const [prevName, prevPrice, prevImageURL, prevCategoryId] = useRef("");

const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [imageURL, setImageURL] = useState("");
const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    if (productId) {
      
      const foundProduct = products.find((product) => 
      product.id === Number(productId));
      
      if (foundProduct) {
        setName(foundProduct.name);
        setPrice(foundProduct.price);
        setImageURL(foundProduct.imageURL);
        setCategoryId(foundProduct.categoryId);
      }
    }
  }, [productId, products]);

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    
    if (!productId) {
      alert("No product ID available");
      return;
    }

    if (!name || !price || !imageURL || !categoryId) {
      alert("All fields are required!");
      return;
    }

    const updatedProduct = {
      id: Number(productId),
      name,
      price,
      imageURL,
      categoryId
    };

    updateProductById(updatedProduct);
    alert("Product successfully updated!");
    navigate("/admin");

  };

  return (
    <div className="max-w-md mx-auto mt-10 px-4">
      <Card className="shadow-lg">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <h3 className="text-white text-2xl font-bold">Update Product</h3>
        </CardHeader>
        <CardBody className="flex flex-col gap-6 p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Input
              type="text"
              name="name"
              label="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            >
              {name}
            </Input>

            <Input
              
              type="number"
              name="price"
              label="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              step="0.01"
              required
             />

            <Input
              type="text"
              name="imageURL"
              label="Image URL"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              required
            >
              {imageURL}
            </Input>

            <Input
              name="CategoryId"
              label="categoryId"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              required
            >
              {categoryId}
            </Input>

            <Button
              type="submit"
              color="blue"
              className="mt-6"
              fullWidth
            >
              Update
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default UpdateProductForm;