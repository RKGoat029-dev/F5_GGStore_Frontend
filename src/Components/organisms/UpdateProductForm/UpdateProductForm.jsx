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

const UpdateProductForm = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    imageURL: "",
    categoryId: ""
  });

  // Estado para manejar la carga
  const [isLoading, setIsLoading] = useState(true);

  // Cargar los datos iniciales del producto
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Hacer la petición al backend para obtener los datos del producto
        const response = await fetch(`http://tu-api/products/${productId}`);
        if (!response.ok) {
          throw new Error('Error al cargar el producto');
        }
        const productData = await response.json();
        
        // Actualizar el estado con los datos del producto
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

  // Función para manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Función para manejar el envío del formulario
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

      // Llamar a la función de actualización
      await updateProduct(productId, updatedProduct);
      alert("Producto actualizado exitosamente!");
      navigate("/admin");
    } catch (error) {
      console.error("Error al actualizar:", error);
      alert("Error al actualizar el producto");
    }
  };

  // Mostrar un indicador de carga mientras se obtienen los datos
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