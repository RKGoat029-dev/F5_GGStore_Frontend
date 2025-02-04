import { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Button, Input } from "@material-tailwind/react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const UpdateProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: 0,
    categoryId: 0,
    imageURL: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`http://localhost:8080/api/products/${id}`);
        setProduct(res.data);
        setError(null);
      } catch (error) {
        setError("Failed to load product. Please try again.");
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };
    if (id) {
      getProduct();
    }
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setError(null);
    try {
      const response = await axios.put(
        `http://localhost:8080/api/products/${id}`,
        product
      );
      if (response.status === 200) {
        navigate("/admin");
      }
    } catch (error) {
      setError("Failed to update product. Please check your input and try again.");
      console.error("Error updating product:", error);
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
        {error && (
          <div className="p-4 bg-red-50 border-l-4 border-red-500">
            <p className="text-red-700">{error}</p>
          </div>
        )}
        <CardBody className="flex flex-col gap-6 p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Input
              type="text"
              label="Product Name"
              value={product.name}
              onChange={(e) => setProduct({...product, name: e.target.value})}
              required
            />
            <Input
              type="number"
              label="Price"
              value={product.price}
              onChange={(e) => setProduct({...product, price: parseFloat(e.target.value)})}
              step="0.01"
              required
            />
            <Input
              type="number"
              label="Category ID"
              value={product.categoryId}
              onChange={(e) => setProduct({...product, categoryId: parseInt(e.target.value)})}
              required
            />
            <Input
              type="text"
              label="Image URL"
              value={product.imageURL}
              onChange={(e) => setProduct({...product, imageURL: e.target.value})}
              required
            />
            <Button
              type="submit"
              disabled={isSaving}
              className={`mt-6 py-4 text-lg font-medium transition-colors ${isSaving ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
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