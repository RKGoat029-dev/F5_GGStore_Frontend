import axios from "axios";

const userDB = "http://localhost:8080/api/users";

const createUser = async (newUser) => {
    const response = await axios.post(userDB, newUser);
    return response.data;
};

const readUserDB = async () => { 
    const response = await axios.get(userDB); 
    return response.data; 
};

const updateUser = async (id, updatedUser) => {
    const response = await axios.put(`${userDB}/update/${id}`, updatedUser);
    return response.data;
};

const deleteUser = async (id) => {
    const response = await axios.delete(`${userDB}/${id}`);
    return response.data;
};

export { createUser, readUserDB, updateUser, deleteUser }