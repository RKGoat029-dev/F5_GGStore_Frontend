import { Card, CardHeader, Button, CardBody, IconButton } from "@material-tailwind/react";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/solid";
import { readProductDB, deleteProduct } from "../../../service/ProductService";
import { useState, useEffect } from "react";

const AdminProductManagement = () => {
  const [products, setProducts] = useState([]);
  
  const getAllProductsFromDB = async () => {
    const data = await readProductDB();
    setProducts(data);
  };

  const deleteProductById = async (id) => {  
    deleteProduct(id);
  }
  
  useEffect(() => { getAllProductsFromDB(); }, []);

  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <p className="text-xl font-semibold text-blue-gray-900">
                Product Management
              </p>
              <p className="mt-1 font-normal text-gray-700">
                See information about all products
              </p>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <Button
                className="flex items-center gap-3"
                color="blue"
              >
                <PlusIcon strokeWidth={2} className="h-4 w-4" />
                Add Product
              </Button>
            </div>
          </div>
          {/* Rest of your header code remains the same */}
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            {/* Table header remains the same */}
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <p className="text-sm text-blue-gray-900">
                      {product.id}
                    </p>
                  </td>
                  <td className="p-4">
                    <img 
                      src={product.imageURL} 
                      alt={product.name} 
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                  </td>
                  <td className="p-4">
                    <p className="text-sm text-blue-gray-900">
                      {product.name}
                    </p>
                  </td>
                  <td className="p-4">
                    <div className="w-max">
                      <p className="text-sm bg-red-100 text-red-800 px-3 py-1 rounded-full">
                        Status
                      </p>
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="text-sm text-blue-gray-900">
                      ${product.price}
                    </p>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <IconButton variant="text" color="blue">
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                      <IconButton variant="text" color="red">
                        <TrashIcon onClick={deleteProductById(product.id)} className="h-4 w-4" />
                      </IconButton>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </>
  );
};

export default AdminProductManagement;