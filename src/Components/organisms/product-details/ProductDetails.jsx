import Header from "../../molecules/Header/Header.jsx"
import Dragon from "../../../assets/images/Dragon-ball-Xenoverse.jpg"


import React, { useState } from 'react';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-lg p-4">
            <div className="p-4">
              <img 
                src={Dragon}
                alt="Photography Equipment Set" 
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <button 
                className="p-2 hover:bg-gray-100 rounded-full text-black"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                {/* Icon content here */}
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <p className="text-2xl font-bold text-black">$54.98</p>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-black">(32 reviews)</span>
              </div>
            </div>

            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
            </p>

            <ul className="space-y-2">
              <p className="text-black">• Lorem ipsum dolor sit amet, adipi scring elit</p>
              <p className="text-black">• Lorem ipsum dolor sit amet, consectetur adipi scring elit</p>
              <p className="text-black">• Lorem ipsum dolor sit amet, consectetur adipi</p>
            </ul>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded">
                <button 
                  className="px-4 py-2 text-black hover:bg-gray-100"
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <p className="px-4 text-black">{quantity}</p>
                <button 
                  className="px-4 py-2 text-black hover:bg-gray-100"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
              <button className="bg-yellow-400 text-black px-8 py-2 rounded hover:bg-yellow-500">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="border-b border-gray-300">
            <div className="flex space-x-8">
              <button 
                className={`px-4 py-2 ${
                  activeTab === 'description' 
                    ? 'text-yellow-400 border-b-2 border-yellow-400' 
                    : 'text-black'
                }`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button 
                className={`px-4 py-2 ${
                  activeTab === 'reviews' 
                    ? 'text-yellow-400 border-b-2 border-yellow-400' 
                    : 'text-black'
                }`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews
              </button>
            </div>
          </div>
          <div className="py-6">
            {activeTab === 'description' ? (
              <>
                <p className="mb-4 text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="space-y-2">
                  <p className="text-black">• Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                  <p className="text-black">• Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                  <p className="text-black">• Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </ul>
              </>
            ) : (
              <div className="text-black">Esta muy bueno el juego</div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;