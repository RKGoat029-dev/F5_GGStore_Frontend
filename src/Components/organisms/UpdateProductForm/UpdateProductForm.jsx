import { useState, useEffect } from 'react';
import { 
  Card, 
  CardHeader, 
  CardBody, 
  Button, 
  Input,
} from "@material-tailwind/react";
import { useNavigate, useParams } from 'react-router-dom';
import { productDB, updateProduct } from "../../../service/ProductService.jsx";

const UpdateProductForm = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    imageURL: "",
    categoryId: ""
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${productDB}/${productId}`);
        if (!response.ok) {
          throw new Error('Error al cargar el producto');
        }
        const productData = await response.json();
        
        setFormData({
          name: productData.name || "",
          price: productData.price || "",
          imageURL: productData.imageURL || "",
          categoryId: productData.categoryId || ""
        });
        
        setIsLoading(false);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
        alert("Error al cargar los datos del producto");
        setIsLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const updatedProduct = {
        id: Number(productId),
        name: formData.name,
        price: Number(formData.price),
        imageURL: formData.imageURL,
        categoryId: Number(formData.categoryId)
      };

      await updateProduct(productId, updatedProduct);
      alert("Producto actualizado exitosamente!");
      navigate("/admin");
    } catch (error) {
      console.error("Error al actualizar:", error);
      alert("Error al actualizar el producto");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Cargando...</div>
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
          <h3 className="text-white text-2xl font-bold">Actualizar Producto</h3>
        </CardHeader>
        <CardBody className="flex flex-col gap-6 p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Input
              type="text"
              name="name"
              label="Nombre del Producto"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <Input
              type="number"
              name="price"
              label="Precio"
              value={formData.price}
              onChange={handleChange}
              step="0.01"
              required
            />

            <Input
              type="text"
              name="imageURL"
              label="URL de la Imagen"
              value={formData.imageURL}
              onChange={handleChange}
              required
            />

            <Input
              type="number"
              name="categoryId"
              label="ID de Categoría"
              value={formData.categoryId}
              onChange={handleChange}
              required
            />

            <Button
              type="submit"
              color="blue"
              className="mt-6"
              fullWidth
            >
              Actualizar
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default UpdateProductForm;