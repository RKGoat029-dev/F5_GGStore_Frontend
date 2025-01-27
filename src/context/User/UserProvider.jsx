import { UserContext } from "./UserContext.jsx";
import useUser from "../../hooks/useUsers.jsx";

const UserProvider = () => {

    const { users, createNewUser, updateUserById, deleteUserById } = useUser();

    return (
        <UserContext.Provider value={{ users, createNewUser, updateUserById, deleteUserById }} />
    );

};

export default UserProvider;