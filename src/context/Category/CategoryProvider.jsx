import { CategoryContext } from "./CategoryContext.jsx";
import useCategory from "../../hooks/useCategories.jsx";

const CategoryProvider = () => {

    const { categories, createNewCategory, updateCategoryById, deleteCategoryById } = useCategory();

    return (
        <CategoryContext.Provider value={{ categories, createNewCategory, updateCategoryById, deleteCategoryById }} />
    );

};

export default CategoryProvider;