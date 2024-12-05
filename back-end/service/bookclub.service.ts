import { Bookclub } from "../model/bookclub";
import bookclubDb from "../repository/bookclub.db";
import userDb from "../repository/user.db";
import { BookclubInput } from "../types";

const createBookclub = ({
    creator: userInput,
    name,
    description,
}: BookclubInput): Bookclub => {
    if (!userInput.id) throw new Error('Creator id is required');
    if (!name) throw new Error('Name is required');

    const creator = userDb.getUserById(userInput.id);
    if (!creator) throw new Error('Creator not found');

    const existingBookclub = bookclubDb.getBookclubByName(name);
    if (existingBookclub) throw new Error('A bookclub with this name already exists.');
    
    const bookclub = new Bookclub({ creator, name, description });
    return bookclubDb.createBookclub(bookclub);
};

const getAllBookclubs = (): Bookclub[] => bookclubDb.getAllBookclubs();

const getBookclubByName = (name: string): Bookclub | undefined => {
    return bookclubDb.getBookclubByName(name);
};

const getBookclubById = (id: number): Bookclub | undefined => {
    return bookclubDb.getBookclubById(id);
};

export default { 
    createBookclub,
    getAllBookclubs,
    getBookclubByName,
    getBookclubById,
};