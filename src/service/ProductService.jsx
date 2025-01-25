import axios from "axios";
import REACT_APP_DB_API_PRODUCT from "../../.env";

const productDB = REACT_APP_DB_API_PRODUCT;

const createProduct = async (newProduct) => {
    const response = await axios.post(productDB, newProduct);
    return response.data;
};

const readProductDB = async () => { 
    const response = await axios.get(productDB); 
    return response.data; 
};

const updateProduct = async (id, updatedProduct) => {
    const response = await axios.put(`${productDB}/update/${id}`, updatedProduct);
    return response.data;
};

const deleteProduct = async (id) => {
    const response = await axios.delete(`${productDB}/${id}`);
    return response.data;
};

export { createProduct, readProductDB, updateProduct, deleteProduct }