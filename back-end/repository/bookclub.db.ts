import { Book } from "../model/book";
import { Bookclub } from "../model/bookclub";
import { User } from "../model/user";

const bookclubs: Bookclub[] = [
    // new Bookclub({ 
    //     id: 1,
    //     creator: new User({
    //         id: 1,
    //         username: "kimberlyaustria",
    //         firstName: "Kimberly",
    //         lastName: "Austria",
    //         email: "kimberlyaustria@example.com",
    //         password: "test.P@ssword123"
    //     }),
    //     name: "The babies",
    //     members: [
    //         new User({
    //             id: 1,
    //             username: "kimberlyaustria",
    //             firstName: "Kimberly",
    //             lastName: "Austria",
    //             email: "kimberlyaustria@example.com",
    //             password: "test.P@ssword123"
    //         })
    //     ],
    //     books: []
    // })
];


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

const addBook = (book: Book ): Bookclub | null => {
    const bookclub = bookclubs.find((bookclub) => bookclub.getId());
    if (bookclub) { 
        bookclub.addBookToBookclub(book); 
        return bookclub;
    }
    return null;
};

export default {
    createBookclub,
    getAllBookclubs,
    getBookclubByName,
    getBookclubById,
    addBook,
};