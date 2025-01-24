import axios from "axios";
import REACT_APP_DB_API_CATEGORY from "../../.env";

const categoryDB = REACT_APP_DB_API_CATEGORY;

// Create
const createCategory = async (newCategory) => {
    const response = await axios.post(categoryDB, newCategory);
    return response.data;
};

// Read 
const readCategoryDB = async () => { 
    const response = await axios.get(categoryDB); 
    return response.data; 
};

// Update
const updateCategory = async (id, updatedCategory) => {
    const response = await axios.put(`${categoryDB}/update/${id}`, updatedCategory);
    return response.data;
};

// Delete
const deleteCategory = async (id) => {
    const response = await axios.delete(`${categoryDB}/${id}`);
    return response.data;
};

export { createCategory, readCategoryDB, updateCategory, deleteCategory }