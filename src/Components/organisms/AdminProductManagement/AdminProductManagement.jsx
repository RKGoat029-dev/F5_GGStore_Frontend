import { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Button, IconButton } from "@material-tailwind/react";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/solid";
import { readProductDB, deleteProduct } from '../../../service/ProductService';
import { Link } from 'react-router-dom';
import "./AdminProductManagement.css"

const AdminProductManagement = () => {
  const [products, setProducts] = useState([]);

  const getAllProductsFromDB = async () => {
    try {
      const data = await readProductDB();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      getAllProductsFromDB();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    getAllProductsFromDB();
  }, []);

  return (
    <div className="card-container flex justify-center items-center min-h-screen">
      <Card className=" md:w-3/4 lg:w-2/3 bg-white shadow-xl rounded-lg p-6">
        <CardHeader floated={false} shadow={false} className="rounded-t-lg bg-white px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="space-y-2">
              <h4 className="text-3xl font-bold text-gray-800 text-center">Product Management</h4>
              <p className="text-gray-600 text-center">
                See information about all products
              </p>
            </div>
            <div className="flex justify-end">
              <Link to="/admin-form" className="w-full md:w-auto">
                <Button className="button-add flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 transition-colors w-full md:w-auto px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl">
                  <PlusIcon className="h-6 w-6" />
                  Add Product
                </Button>
              </Link>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-x-auto px-6 py-4">
          <table className="w-full min-w-max table-auto">
            <thead>
              <tr>
                {["ID", "Name", "Image", "Price", "Actions"].map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50/50 p-4 text-left"
                  >
                    <p className="font-semibold text-gray-700">
                      {head}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="font-medium text-gray-700">{product.id}</p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="font-medium text-gray-700">{product.name}</p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="w-24 h-24 overflow-hidden rounded-lg">
                      <img
                        className="w-full h-full object-cover object-center"
                        src={product.imageURL}
                        alt={product.name}
                      />
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="font-medium text-gray-700">${product.price}</p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex items-center justify-start gap-4">
                      <IconButton
                        variant="text"
                        className="flex items-center justify-center bg-blue-50 hover:bg-blue-100 text-blue-500 w-12 h-12 rounded-lg transition-all duration-200 transform hover:scale-105"
                        onClick={() => window.location.href = `/edit/${product.id}`}
                      >
                        <PencilIcon className="h-6 w-6" />
                      </IconButton>
                      <IconButton
                        variant="text"
                        className="flex items-center justify-center bg-red-50 hover:bg-red-100 text-red-500 w-12 h-12 rounded-lg transition-all duration-200 transform hover:scale-105"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <TrashIcon className="h-6 w-6" />
                      </IconButton>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default AdminProductManagement;