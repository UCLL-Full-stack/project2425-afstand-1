import { User } from "../model/user";

const users: User[] = [];

const getUserById = ( id: number ): User | undefined => {
    return users.find((user) => user.getId() === id);
};

const getAllUsers = (): User[] => users;

export default {
    getUserById,
    getAllUsers,
};