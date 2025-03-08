import { User } from "../model/user";
import userDb from "../repository/user.db";
import { UserInput } from "../types";

const createUser = ({
    username,
    firstName,
    lastName,
    email,
    password,
}: UserInput): User => {
    if (!username) throw new Error('Username is required');
    if (!firstName) throw new Error('First Name is required');
    if (!lastName) throw new Error('Last Name is required');
    if (!email) throw new Error('Email is required');
    if (!password) throw new Error('Password is required');

    const existingUser = userDb.getUserByUsername(username);
    if (existingUser) throw new Error('User with this username already exists.');
    
    const user = new User({ username, firstName, lastName, email, password });
    return userDb.createUser(user);
};


const getAllUsers = (): User[] => userDb.getAllUsers();

const getUserById = (id: number): User | undefined => userDb.getUserById(id);

export default {
    createUser,
    getAllUsers,
    getUserById,
};