import axios from "axios";

const categoryDB = "http://localhost:8080/api/categories";

const createCategory = async (newCategory) => {
    const response = await axios.post(categoryDB, newCategory);
    return response.data;
};

const readCategoryDB = async () => { 
    const response = await axios.get(categoryDB); 
    return response.data; 
};

const updateCategory = async (id, updatedCategory) => {
    const response = await axios.put(`${categoryDB}/update/${id}`, updatedCategory);
    return response.data;
};

const deleteCategory = async (id) => {
    const response = await axios.delete(`${categoryDB}/${id}`);
    return response.data;
};

export { createCategory, readCategoryDB, updateCategory, deleteCategory }