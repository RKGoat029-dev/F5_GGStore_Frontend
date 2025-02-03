import { useState, useEffect } from 'react';
import {   Card,   CardHeader,   CardBody,   Button,   IconButton } from "@material-tailwind/react";
import {   PencilIcon,   TrashIcon,   PlusIcon } from "@heroicons/react/24/solid";
import { readProductDB, deleteProduct } from '../../../service/ProductService';
import { Link } from 'react-router-dom';

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
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h4 className="text-2xl font-bold">Product Management</h4>
            <p className="mt-1 font-normal text-gray-600">
              See information about all products
            </p>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <Link to="/admin-form">
            <Button className="flex items-center gap-3" size="sm">
              <PlusIcon strokeWidth={2} className="h-4 w-4" /> Add Product
            </Button>
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {["ID", "Name", "Image", "Price", "Actions"].map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <p className="font-normal leading-none opacity-70">
                    {head}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="font-normal">{product.id}</p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="font-normal">{product.name}</p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <img className="w-25 h-25" src={product.imageURL} alt={product.name} />
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="font-normal">${product.price}</p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex gap-2">
                    <IconButton
                      variant="text"
                      color="blue"
                      onClick={() => window.location.href = `/edit-product/${product.id}`}
                    >
                      <PencilIcon className="h-4 w-4" />
                    </IconButton>
                    <IconButton
                      variant="text"
                      color="red"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      <TrashIcon className="h-4 w-4" />
                    </IconButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default AdminProductManagement;