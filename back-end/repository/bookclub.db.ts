import { Book } from "../model/book";
import { Bookclub } from "../model/bookclub";
import { User } from "../model/user";

const bookclubs: Bookclub[] = [
    new Bookclub({ 
        id: 1,
        creator: new User({
            id: 1,
            username: "kimberlyaustria",
            firstName: "Kimberly",
            lastName: "Austria",
            email: "kimberlyaustria@example.com",
            password: "test.P@ssword123"
        }),
        name: "The babies",
        description:"Join our book club for engaging discussions, fresh perspectives, and a shared love of reading. Each month, we dive into a new title—from fiction to nonfiction—and come together to explore themes, characters, and ideas in a welcoming, relaxed atmosphere. Whether you're a casual reader or a literary enthusiast, all are welcome!",
        members: [
            new User({
                id: 1,
                username: "kimberlyaustria",
                firstName: "Kimberly",
                lastName: "Austria",
                email: "kimberlyaustria@example.com",
                password: "test.P@ssword123"
            })
        ],
        books: [],
    }),
    new Bookclub({ 
        id: 2,
        creator: new User({
            id: 1,
            username: "kimberlyaustria",
            firstName: "Kimberly",
            lastName: "Austria",
            email: "kimberlyaustria@example.com",
            password: "test.P@ssword123"
        }),
        name: "The Goonies",
        members: [
            new User({
                id: 1,
                username: "kimberlyaustria",
                firstName: "Kimberly",
                lastName: "Austria",
                email: "kimberlyaustria@example.com",
                password: "test.P@ssword123"
            })
        ],
        books: []
    }),
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

const addBook = (book: Book, bookclubId: number ): Bookclub | null => {
    const bookclub = bookclubs.find((bookclub) => bookclub.getId() === bookclubId);
    if (bookclub) { 
        bookclub.addBookToBookclub(book); 
        return bookclub;
    }
    return null;
};

const addMember = (member: User): User | null => {
    const bookclub = bookclubs.find((bookclub) => bookclub.getId());
    if (bookclub) { 
        bookclub.addMemberToBookclub(member); 
        return member;
    }
    return null;
}

export default {
    createBookclub,
    getAllBookclubs,
    getBookclubByName,
    getBookclubById,
    addBook,
    addMember,
};