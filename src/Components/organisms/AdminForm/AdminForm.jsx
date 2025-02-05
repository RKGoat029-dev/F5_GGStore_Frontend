import "./admin-form.css";

import { useState } from 'react';
import {
  Card, CardHeader, CardBody, Input, Button
} from "@material-tailwind/react";
import { createProduct } from '../../../service/ProductService';
import Header from "../../../components/molecules/Header/Header";
import Footer from "../../../components/molecules/Footer/Footer";

const AdminForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    categoryId: '',
    imageURL: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {

      if (!formData.name || !formData.price || !formData.categoryId) {
        throw new Error('Please fill in all required fields');
      }

      if (isNaN(formData.price) || formData.price <= 0) {
        throw new Error('Please enter a valid price');
      }


      const productData = {
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock, 10)
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
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-2xl p-8 md:p-12 shadow-lg">
          <CardHeader color="gray" className="mb-6 grid h-28 place-items-center rounded-lg">
            <h3 className="text-white text-3xl font-bold">Create New Product</h3>
          </CardHeader>

          <CardBody className="flex flex-col gap-6">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
              <Input label="Product Name" name="name" value={formData.name} onChange={handleChange} required />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Price" name="price" type="number" step="0.01" value={formData.price} onChange={handleChange} required />
              </div>

              <Input label="CategoryId" name="categoryId" value={formData.categoryId} onChange={handleChange} required />
              <Input label="ImageURL" name="imageURL" value={formData.imageURL} onChange={handleChange} />

              {formData.imageURL && (
                <div className="w-40 h-40 mx-auto">
                  <img src={formData.imageURL} alt="Product preview" className="w-full h-full object-cover rounded-lg" />
                </div>
              )}

              <Button type="submit" color="gray" className="mt-6 py-3 text-lg font-semibold" disabled={loading}>
                {loading ? 'Creating...' : 'Create Product'}
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
     <Footer/>

    </>
  );
};

export default AdminForm;