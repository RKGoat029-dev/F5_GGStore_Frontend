
import {Card,  CardHeader,  Button, CardBody,  IconButton,  Input,  Select,
  Option
} from "@material-tailwind/react";
import {  PencilIcon,  TrashIcon,  PlusIcon,  MagnifyingGlassIcon,

} from "@heroicons/react/24/solid";
import { readProductDB } from "../../../service/ProductService";
import { useState, useEffect } from "react";


const AdminProductManagement = () => {
  
  const [products, setProducts] = useState([]);

    const getAllProductsFromDB = async () => {
        const data = await readProductDB();
        setProducts(data);
    };

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
              <Button className="flex items-center gap-3" color="blue">
                <PlusIcon strokeWidth={2} className="h-4 w-4" />
                Add Product
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 mt-4 md:flex-row">
            <div className="flex gap-2">
              <Select label="Status" className="w-48">
                <Option>All Status</Option>
                <Option>Available</Option>
                <Option>No disponible</Option>
              </Select>
              <Select label="Sort By" className="w-48">
                <Option>Price: Low to High</Option>
                <Option>Price: High to Low</Option>
              </Select>
            </div>
            <div className="w-full md:w-72">
              <Input 
                label="Search" 
                icon={<MagnifyingGlassIcon className="h-5 w-5" />} 
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <p className="text-sm font-normal leading-none text-blue-gray-600">
                    ID
                  </p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <p className="text-sm font-normal leading-none text-blue-gray-600">
                    Image
                  </p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <p className="text-sm font-normal leading-none text-blue-gray-600">
                    Name
                  </p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <p className="text-sm font-normal leading-none text-blue-gray-600">
                    Status
                  </p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <p className="text-sm font-normal leading-none text-blue-gray-600">
                    Price
                  </p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <p className="text-sm font-normal leading-none text-blue-gray-600">
                    Actions
                  </p>
                </th>
              </tr>
            </thead>
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
                        <TrashIcon className="h-4 w-4" />
                      </IconButton>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
        <div className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <p className="text-sm text-blue-gray-600">
            Page 1 of 10
          </p>
          <div className="flex gap-2">
            <Button variant="outlined" color="blue-gray" size="sm">
              Previous
            </Button>
            <Button variant="outlined" color="blue-gray" size="sm">
              Next
            </Button>
          </div>
        </div>
      </Card>
  </>
  )
}

export default AdminProductManagement;