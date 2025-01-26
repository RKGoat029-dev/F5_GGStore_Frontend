import { useState, useEffect } from "react";
import { createCategory, readCategoryDB, updateCategory, deleteCategory } from "../service/CategoryService.jsx";

const useCategory = () => {

    const [categories, setCategories] = useState([]);

    const getAllCategoriesFromDB = async () => {
        const data = await readCategoryDB();
        setCategories(data);
    };

    const createNewCategory = async (newCategory) => {
        const createdCategory = await createCategory(newCategory);
        setCategories((prevCategories) => [...prevCategories, createdCategory]);
    };

    const updateCategoryById = async (id, updatedCategory) => {
        const updatingCategory = await updateCategory(id, updatedCategory);
        setCategories((prevCategories) => prevCategories.map((category) => (category.id === id ? updatingCategory : category)));
    };

    const deleteCategoryById = async (id) => {
        await deleteCategory(id);
        setCategories((prevCategories) => prevCategories.filter((category) => category.id !== id));
    };

    useEffect(() => { getAllCategoriesFromDB(); }, []);

    return { categories, createNewCategory, updateCategoryById, deleteCategoryById };

};

export default useCategory;