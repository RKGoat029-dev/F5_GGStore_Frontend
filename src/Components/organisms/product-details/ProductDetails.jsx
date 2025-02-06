import Header from "../../../components/molecules/Header/Header";
import "./ProductDetails.css";
import { useState } from "react";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <>
      <Header />
      <div className="product-container">
        <div className="product-wrapper">
          <div className="product-content">
           
            <div className="product-image">
              <img src="https://picsum.photos/200/300" alt="Product" />
            </div>

            
            <div className="product-info">
              <div className="product-header">
                <button className="favorite-button" onClick={() => setIsFavorite(!isFavorite)}>
                  {isFavorite ? "❤️" : "♡"}
                </button>
              </div>

              <div className="product-price">
                <p className="price">$54.98</p>
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="star">⭐</span>
                  ))}
                  <span className="review-count">(32 reviews)</span>
                </div>
              </div>

              <p className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
              </p>

              <ul className="product-features">
                <li>• Lorem ipsum dolor sit amet, adipi scring elit</li>
                <li>• Lorem ipsum dolor sit amet, consectetur adipi scring elit</li>
                <li>• Lorem ipsum dolor sit amet, consectetur adipi</li>
              </ul>

              <div className="product-actions">
                <div className="quantity-selector">
                  <button onClick={() => handleQuantityChange(-1)}>-</button>
                  <p>{quantity}</p>
                  <button onClick={() => handleQuantityChange(1)}>+</button>
                </div>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>

          
          <div className="product-tabs">
            <button className={activeTab === "description" ? "active" : ""} onClick={() => setActiveTab("description")}>
              Description
            </button>
            <button className={activeTab === "reviews" ? "active" : ""} onClick={() => setActiveTab("reviews")}>
              Reviews
            </button>
          </div>

          <div className="product-tab-content">
            {activeTab === "description" ? (
              <>
                <p className="tab-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="tab-list">
                  <li>• Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                  <li>• Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</li>
                  <li>• Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                </ul>
              </>
            ) : (
              <div>Esta muy bueno el juego</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
