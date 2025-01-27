import { ProductContext } from "./ProductContext.jsx";
import useProduct from "../../hooks/useProducts.jsx";

const ProductProvider = () => {

    const { products, createNewProduct, updateProductById, deleteProductById } = useProduct();

    return (
        <ProductContext.Provider value={{ products, createNewProduct, updateProductById, deleteProductById }} />
    );

};

export default ProductProvider;