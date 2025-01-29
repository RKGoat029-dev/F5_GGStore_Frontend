import { useState } from "react";
import Header from "../../molecules/Header/Header"
import Beyond from "../../../assets/images/beyond.jpg"
import GearsOfWar from "../../../assets/images/gear-of-war.png"
import Forza from "../../../assets/images/Forza-horizon.webp"
import Halo from "../../../assets/images/halo.jpg"
import Dragon from "../../../assets/images/Dragon-ball-Xenoverse.jpg"
import Need from "../../../assets/images/need-for-speed.webp"
import "./ProductGrid.css"
const ProductGrid = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState('Popular');

  const categories = [
    { id: 'itar', label: 'Itar' },
    { id: 'kafan', label: 'Kafan' },
    { id: 'caps', label: 'Caps' },
    { id: 'food', label: 'Food' },
  ];

  const products = [
    { id: 1, name: 'beyond', price: 99, image: Beyond },
    { id: 2, name: 'gear of war', price: 99, image: GearsOfWar },
    { id: 3, name: 'forza', price: 99, image: Forza },
    { id: 4, name: 'halo', price: 99, image: Halo },
    { id: 5, name: 'dragon ball', price: 99, image: Dragon},
    { id: 6, name: 'need for speed', price: 99, image: Need },
  ];

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
  };

  return (
    <>
    <Header/>
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Filters</h2>
          <button
            onClick={clearFilters}
            className="text-yellow-500 text-sm hover:underline"
          >
            Clear filters
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white">Sort By:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-yellow-500 text-black px-4 py-2 rounded-md cursor-pointer"
          >
            <option value="Popular">Popular</option>
            <option value="Price">Price</option>
            <option value="Newest">Newest</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Filters Sidebar */}
        <div className="col-span-2">
          <div className="space-y-4">
            <h3 className="text-white font-medium">Categories</h3>
            {categories.map((category) => (
              <div key={category.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                  className="w-4 h-4 text-black-500 border-gray-300 rounded focus:ring-black-500"
                />
                <label
                  htmlFor={category.id}
                  className="ml-2 text-black cursor-pointer"
                >
                  {category.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="col-span-10">
          <div className="grid grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-700 rounded-lg overflow-hidden">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full" 
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium">{product.name}</h3>
                  <p className="text-yellow-500">${product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors">
              Load more products
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductGrid;