import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productDB, updateProduct } from "../../../service/ProductService.jsx";
import "./UpdateProductForm.css";
import Header from "../../../components/molecules/Header/Header.jsx";

const UpdateProductForm = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    imageURL: "",
    categoryId: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${productDB}/${productId}`);
        if (!response.ok) {
          throw new Error("Error al cargar el producto");
        }
        const productData = await response.json();

        setFormData({
          name: productData.name || "",
          price: productData.price || "",
          imageURL: productData.imageURL || "",
          categoryId: productData.categoryId || "",
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
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
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
        categoryId: Number(formData.categoryId),
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
    return <div className="form-container">Cargando...</div>;
  }

  return (
    <>
      <Header />
      <div className="form-container">
        <div className="form-card">
          <h3 className="title-update">Actualizar Producto</h3>
          <form onSubmit={handleSubmit} className="form">
            <fieldset className="input-group">
              <legend>Nombre del Producto</legend>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </fieldset>

            <fieldset className="input-group">
              <legend>Precio</legend>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                step="0.01"
                required
              />
            </fieldset>

            <fieldset className="input-group">
              <legend>URL de la Imagen</legend>
              <input
                type="text"
                name="imageURL"
                value={formData.imageURL}
                onChange={handleChange}
                required
              />
            </fieldset>

            <fieldset className="input-group">
              <legend>ID de Categoría</legend>
              <input
                type="number"
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                required
              />
            </fieldset>

            <button type="submit" className="button-form">
              Actualizar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProductForm;

