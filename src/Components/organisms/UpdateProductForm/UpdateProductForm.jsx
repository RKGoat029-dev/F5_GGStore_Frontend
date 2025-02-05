import { useState, useEffect } from 'react';
import { 
  Card, 
  CardHeader, 
  CardBody, 
  Button, 
  Input,
 
} from "@material-tailwind/react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState({
    id: '',
    name: '',
    
    price: '',
    imageURL: '',
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      if (!id) {
        setError("No product ID provided");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const res = await axios.get(`http://localhost:8080/api/products/${id}`);
        if (!res.data) {
          throw new Error('No data received from server');
        }
        
       
        setProduct({
          ...res.data,          
          price: res.data.price || 0,
          id: res.data.id || id
        });
        setError(null);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(error.response?.data?.message || "Failed to load product. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
      setError("No product ID available");
      return;
    }

    setIsSaving(true);
    setError(null);

    
    const updatedProduct = {
      ...product,
      price: parseFloat(product.price),
      id: parseInt(id)
    };

    try {
      console.log('Sending update request with data:', updatedProduct);
      
      const response = await axios.put(
        `http://localhost:8080/api/products/${id}`,
        updatedProduct,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      console.log('Update response:', response);

      if (response.data) {
        alert('Product updated successfully!');
        navigate("/admin");
      } else {
        throw new Error('No response data received');
      }
    } catch (error) {
      console.error("Error updating product:", error);
      setError(error.response?.data?.message || "Failed to update product. Please check your input and try again.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-96 p-6">
          <div className="text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <Button
              color="blue"
              onClick={() => navigate("/admin")}
            >
              Return to Admin Panel
            </Button>
          </div>
        </Card>
      </div>
    );
  }

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
              value={product.name || ''}
              onChange={handleChange}
              required
            />
            
            

            <Input
              type="number"
              name="price"
              label="Price"
              value={product.price || ''}
              onChange={handleChange}
              step="0.01"
              required
            />

           

            <Input
              type="text"
              name="imageURL"
              label="Image URL"
              value={product.imageURL || ''}
              onChange={handleChange}
              required
            />

            <Button
              type="submit"
              disabled={isSaving}
              color="blue"
              className="mt-6"
              fullWidth
            >
              {isSaving ? "Updating..." : "Update Product"}
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default UpdateProductForm;