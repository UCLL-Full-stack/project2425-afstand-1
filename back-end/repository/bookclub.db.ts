import { Bookclub } from "../model/bookclub";

const bookclubs: Bookclub[] = [];

const createBookclub = (bookclub: Bookclub): Bookclub => {
    bookclubs.push(bookclub);
    return bookclub;
};

const getAllBookclubs = (): Bookclub[] => bookclubs;

const getBookclubByName = ( name: string ): Bookclub | undefined => {
    return bookclubs.find((bookclub) => bookclub.getName() === name);
};

const getBookclubById = ( id: number ): Bookclub | undefined => {
    return bookclubs.find((bookclub) => bookclub.getId() === id);
}; 

export default {
    createBookclub,
    getAllBookclubs,
    getBookclubByName,
    getBookclubById,
};