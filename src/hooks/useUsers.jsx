import { useState, useEffect } from "react";
import { createUser, readUserDB, updateUser, deleteUser } from "../service/UserService.jsx";

const useUser = () => {

    const [users, setUsers] = useState([]);

    const getAllUsersFromDB = async () => {
        const data = await readUserDB();
        setUsers(data);
    };

    const createNewUser = async (newUser) => {
        const createdUser = await createUser(newUser);
        setUsers((prevUsers) => [...prevUsers, createdUser]);
    };

    const updateUserById = async (id, updatedUser) => {
        const updatingUser = await updateUser(id, updatedUser);
        setUsers((prevUsers) => prevUsers.map((user) => (user.id === id ? updatingUser : user)));
    };

    const deleteUserById = async (id) => {
        await deleteUser(id);
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    };

    useEffect(() => { getAllUsersFromDB(); }, []);

    return { users, createNewUser, updateUserById, deleteUserById };

};

export default useUser;