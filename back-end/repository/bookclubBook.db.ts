import { BookclubBook } from "../model/bookclubBook";
import { Status } from "../types";

const bookclubBooks: BookclubBook[] = [
    new BookclubBook({
        id: 1,
        book: '9780141439570',
        bookclub: 1,
        status: Status.TO_READ
    })
];

const createBookclubBook = (bookclubBook: BookclubBook): BookclubBook => {
    bookclubBooks.push(bookclubBook);
    return bookclubBook;
};

const getAllBookclubBooks = (): BookclubBook[] => bookclubBooks;

const getBookclubBookById = (id: number): BookclubBook | undefined => {
    return bookclubBooks.find((bookclubBook) => bookclubBook.getId() === id);
};

export default {
    createBookclubBook,
    getAllBookclubBooks,
    getBookclubBookById,
}; 