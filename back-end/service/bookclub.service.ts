import { Bookclub } from "../model/bookclub";
import { User } from "../model/user";
import bookDb from "../repository/book.db";
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

const addBookToBookclub = ( bookclubId: number, bookIsbn: string ): Bookclub | null => {
    const bookclub = bookclubDb.getBookclubById(bookclubId);
    const book = bookDb.getBookByIsbn(bookIsbn);
    if (!bookclub) {
        throw new Error(`Bookclub with ID ${bookclubId} not found`);
    }
    if (!book) {
        throw new Error(`Book with ISBN ${bookIsbn} not found`);
    }
    return bookclubDb.addBook(book);
};

const addMemberToBookclub = ( bookclubId: number, memberId: number ): User | null => {
    const bookclub = bookclubDb.getBookclubById(bookclubId);
    const member = userDb.getUserById(memberId);
    if (!bookclub) {
        throw new Error(`Bookclub with ID ${bookclubId} not found`);
    }
    if (!member) {
        throw new Error(`Member with ID ${memberId} not found`);
    }
    return bookclubDb.addMember(member);
}

export default { 
    createBookclub,
    getAllBookclubs,
    getBookclubByName,
    getBookclubById,
    addBookToBookclub,
    addMemberToBookclub,
};