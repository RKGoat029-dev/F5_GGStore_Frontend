import { useState } from "react";
import Header from "../../../components/molecules/Header/Header";
import Beyond from "../../../assets/images/beyond.jpg";
import GearsOfWar from "../../../assets/images/gear-of-war.png";
import Forza from "../../../assets/images/Forza-horizon.webp";
import Halo from "../../../assets/images/halo.jpg";
import Dragon from "../../../assets/images/Dragon-ball-Xenoverse.jpg";
import Need from "../../../assets/images/need-for-speed.webp";
import "./ProductGrid.css";
import Footer from "../../molecules/Footer/Footer";

const ProductGrid = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState("Popular");

  const categories = [
    { id: "Beyond", label: "Beyond" },
    { id: "Gear of war", label: "Gear of war" },
    { id: "Forza", label: "Forza" },
    { id: "Halo", label: "Halo" },
    { id: "dragon ball", label: "Dragon ball" },
    { id: "need for speed", label: "Need for speed" },
  ];

  const products = [
    { id: 1, name: "beyond", price: 50, image: Beyond },
    { id: 2, name: "gear of war", price: 70, image: GearsOfWar },
    { id: 3, name: "forza", price: 99, image: Forza },
    { id: 4, name: "halo", price: 45, image: Halo },
    { id: 5, name: "dragon ball", price: 60, image: Dragon },
    { id: 6, name: "need for speed", price: 75, image: Need },
  ];

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
  };

  return (
    <>
      <Header />
      <div className="product-grid-container">
        <div className="filters-container">
          <h2>Filters</h2>
          <button onClick={clearFilters} className="clear-filters">
            Clear filters
          </button>

          <h3>Categories</h3>
          {categories.map((category) => (
            <div key={category.id} className="category-option">
              <input
                type="checkbox"
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onChange={() => handleCategoryChange(category.id)}
              />
              <label htmlFor={category.id}>{category.label}</label>
            </div>
          ))}

          <div className="sort-options">
            <span>Sort By:</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="Popular">Popular</option>
              <option value="Price">Price</option>
              <option value="Newest">Newest</option>
            </select>
          </div>
        </div>

        <div className="products-container">
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-price">${product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="load-more">
            <button>Load more products</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductGrid;
