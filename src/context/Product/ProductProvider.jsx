import { ProductContext } from "./ProductContext.jsx";
import useProduct from "../../hooks/useProducts.jsx";

// eslint-disable-next-line react/prop-types
const ProductProvider = ({ children }) => {

    const { products, createNewProduct, updateProductById, deleteProductById } = useProduct();

    return (
        <ProductContext.Provider value={{ products, createNewProduct, updateProductById, deleteProductById }}>
            {children}
        </ProductContext.Provider>
    );

};

export default ProductProvider;