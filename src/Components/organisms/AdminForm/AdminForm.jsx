import "./admin-form.css";

import { useState } from 'react';
import {  Card,  CardHeader,  CardBody,  Input,  Button
} from "@material-tailwind/react";
import { createProduct } from '../../../service/ProductService';

const AdminForm = () => {
  const [productData, setProducData] = useState({
    name: '',
    price: '',
    categoryId: '',
    imageURL: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProducData(prevState => ({
          ...prevState,
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Validaciones básicas
      if (!productData.name || !productData.price || !productData.categoryId) {
        throw new Error('Please fill in all required fields');
      }

      if (isNaN(productData.price) || productData.price <= 0) {
        throw new Error('Please enter a valid price');
      }

    
      const productData = {
        ...productData,
        price: parseFloat(productData.price),
        stock: parseInt(productData.stock, 10)
      };

      await createProduct(productData);
      
      window.location.href = '/admin';
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <h3 className="text-white text-3xl font-bold">Create New Product</h3>
      </CardHeader>

      <CardBody className="flex flex-col gap-4">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Input
              label="Product Name"
              name="name"
              value={productData.name}
              onChange={handleChange}
              required
            />
          </div>

        

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Price"
              name="price"
              type="number"
              step="0.01"
              value={productData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Input
              label="CategoryId"
              name="categoryId"
              value={productData.categoryId}
              onChange={handleChange}
              required
            />
          </div>    

          <div>
            <Input
              label="ImageURL"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
            />
          </div>

          {productData.image && (
            <div className="w-40 h-40 mx-auto">
              <img
                src={productData.imageURL}
                alt="Product preview"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}

          <Button
            type="submit"
            color="blue"
            className="mt-4"
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Product'}
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default AdminForm;