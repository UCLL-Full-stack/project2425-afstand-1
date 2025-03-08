import { User } from "../model/user";

const users: User[] = [
    new User({
        id: 1,
        username: 'kimberlyaustria',
        firstName: 'Kimberly',
        lastName: 'Austria',
        email: 'kimberlyaustria@example.com',
        password: 'test.P@ssword123',  
    }),
    new User({
        id: 2,
        username: "jerryaustria",
        firstName: "Jerry",
        lastName: "Austria",
        email: "jerryaustria@example.com",
        password: "test.P@ssword123"
    }),
];

const getUserById = ( id: number ): User | undefined => {
    return users.find((user) => user.getId() === id);
};

const getUserByUsername = ( username: string ): User | undefined => {
    return users.find((user) => user.getUsername() === username);
};

const getAllUsers = (): User[] => users;

const createUser = (user: User): User => {
    users.push(user);
    return user;
};

export default {
    getUserById,
    getUserByUsername,
    getAllUsers,
    createUser,
};