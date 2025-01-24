import axios from "axios";
import REACT_APP_DB_API_USER from "../../.env";

const userDB = REACT_APP_DB_API_USER;

// Create
const createUser = async (newUser) => {
    const response = await axios.post(userDB, newUser);
    return response.data;
};

// Read 
const readUserDB = async () => { 
    const response = await axios.get(userDB); 
    return response.data; 
};

// Update
const updateUser = async (id, updatedUser) => {
    const response = await axios.put(`${userDB}/update/${id}`, updatedUser);
    return response.data;
};

// Delete
const deleteUser = async (id) => {
    const response = await axios.delete(`${userDB}/${id}`);
    return response.data;
};

export { createUser, readUserDB, updateUser, deleteUser }