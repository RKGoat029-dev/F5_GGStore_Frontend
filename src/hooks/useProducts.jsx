import { useState, useEffect } from "react";
import { createProduct, readProductDB, updateProduct, deleteProduct } from "../service/ProductService.jsx";

const useProduct = () => {

    const [products, setProducts] = useState([]);

    const getAllProductsFromDB = async () => {
        const data = await readProductDB();
        setProducts(data);
    };

    const createNewProduct = async (newProduct) => {
        const createdProduct = await createProduct(newProduct);
        setProducts((prevProducts) => [...prevProducts, createdProduct]);
    };

    const updateProductById = async (id, updatedProduct) => {
        const updatingProduct = await updateProduct(id, updatedProduct);
        setProducts((prevProducts) => prevProducts.map((product) => (product.id === id ? updatingProduct : product)));
    };

    const deleteProductById = async (id) => {
        await deleteProduct(id);
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    };

    useEffect(() => { getAllProductsFromDB(); }, []);

    return { products, createNewProduct, updateProductById, deleteProductById };

};

export default useProduct;