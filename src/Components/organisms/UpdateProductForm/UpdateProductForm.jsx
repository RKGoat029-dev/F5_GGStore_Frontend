import { useState } from 'react';
import { Card, CardHeader, CardBody, Button, Input } from "@material-tailwind/react";
import { updateProduct } from '../../../service/ProductService';

const UpdateProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    price: "",
    categoryId: "",
    image: ""
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
      }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct(prevProduct => ({
        ...prevProduct,
        image: product.imageURL
      }));
      
  
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      const formData = new FormData();
      Object.keys(product).forEach(key => {
        formData.append(key, product[key]);
      });

      await updateProduct(formData);
      
      alert('Product updated successfully!');
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product');
    }
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
          <form onSubmit={handleSubmit()} className="flex flex-col gap-4">
            <div className="mb-4">
              <Input
                type="text"
                name="name"
                label="Product Name"
                value={product.name}
                onChange={handleChange}
                required
              />
            </div>

            

            <div className="mb-4">
              <Input
                type="number"
                name="price"
                label="Price"
                value={product.price}
                onChange={handleChange}
                step="0.01"
                required
              />
            </div>

            <div className="mb-4">
              <Input
                name="categoryId"
                label="CategoryId"
                value={product.categoryId}
                onChange={(value) => setProduct(prev => ({...prev, categoryId: value}))}
              >
              </Input>
            </div>

            

            <div className="mb-4">
              <Input 
                type="text" 
                name="image"
                label="Product Image"
                onChange={handleImageChange}
              />
              {imagePreview && (
                <img 
                  src={imagePreview} 
                  alt="Product Preview" 
                  className="mt-2 h-40 w-full object-cover rounded"
                />
              )}
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