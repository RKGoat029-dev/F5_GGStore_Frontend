import { useState } from "react";
import { createProduct } from "../../../service/ProductService";
import "./admin-form.css";
import Header from "../../../components/molecules/Header/Header";
import Footer from "../../../components/molecules/Footer/Footer";

const AdminForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    categoryId: "",
    imageURL: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!formData.name || !formData.price || !formData.categoryId) {
        throw new Error("Por favor, completa todos los campos requeridos.");
      }

      if (isNaN(formData.price) || formData.price <= 0) {
        throw new Error("Ingresa un precio válido.");
      }

      const productData = {
        ...formData,
        price: parseFloat(formData.price),
      };

      await createProduct(productData);
      window.location.href = "/admin";
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="form-container">
        <div className="form-card">
          <h3 className="title-create">Crear Nuevo Producto</h3>
          {error && <div className="error-message">{error}</div>}
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
              <legend>ID de Categoría</legend>
              <input
                type="number"
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
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
              />
            </fieldset>

            {formData.imageURL && (
              <div className="image-preview">
                <img src={formData.imageURL} alt="Vista previa del producto" />
              </div>
            )}

            <button type="submit" className="button-form" disabled={loading}>
              {loading ? "Creando..." : "Crear Producto"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminForm;
