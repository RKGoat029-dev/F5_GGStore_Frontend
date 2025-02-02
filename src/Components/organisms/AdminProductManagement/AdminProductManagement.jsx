import { Card, CardHeader, Button, CardBody, IconButton, Input, Select, Option, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { PencilIcon, TrashIcon, PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { readProductDB, deleteProduct, createProduct, updateProduct } from "../../../service/ProductService";
import { useState, useEffect } from "react";

const AdminProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    imageURL: '',
    status: 'Available'
  });

  const getAllProductsFromDB = async () => {
    const data = await readProductDB();
    setProducts(data);
  };

  useEffect(() => { getAllProductsFromDB(); }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      getAllProductsFromDB();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      imageURL: product.imageURL,
      status: product.status
    });
    setOpenDialog(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editProduct) {
        await updateProduct(editProduct.id, formData);
      } else {
        await createProduct(formData);
      }
      setOpenDialog(false);
      setEditProduct(null);
      setFormData({ name: '', price: '', imageURL: '', status: 'Available' });
      getAllProductsFromDB();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

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
                onClick={() => {
                  setEditProduct(null);
                  setFormData({ name: '', price: '', imageURL: '', status: 'Available' });
                  setOpenDialog(true);
                }}
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
                    <div className="flex gap-2">
                      <IconButton
                        variant="text"
                        color="blue"
                        onClick={() => handleEdit(product)}
                      >
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                      <IconButton
                        variant="text"
                        color="red"
                        onClick={() => handleDelete(product.id)}
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

      <Dialog open={openDialog} handler={() => setOpenDialog(false)}>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            {editProduct ? 'Edit Product' : 'Add New Product'}
          </DialogHeader>
          <DialogBody>
            <div className="flex flex-col gap-4">
              <Input
                label="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                label="Price"
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
              />
              <Input
                label="Image URL"
                value={formData.imageURL}
                onChange={(e) => setFormData({ ...formData, imageURL: e.target.value })}
                required
              />
              <Select
                label="Status"
                value={formData.status}
                onChange={(value) => setFormData({ ...formData, status: value })}
              >
                <Option value="Available">Available</Option>
                <Option value="No disponible">No disponible</Option>
              </Select>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button color="red" onClick={() => setOpenDialog(false)}>
              Cancel
            </Button>
            <Button color="green" type="submit">
              {editProduct ? 'Save Changes' : 'Add Product'}
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
};

export default AdminProductManagement;