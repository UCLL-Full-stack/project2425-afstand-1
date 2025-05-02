import { BookclubBook } from "../model/bookclubBook";
import bookDb from "../repository/book.db";
import bookclubBookDb from "../repository/bookclubBook.db";
import { BookclubBookInput } from "../types";

const createBookclubBook = ({
    id,
    book,
    bookclub,
    status,
    startDate,
    finishDate,
}: BookclubBookInput): BookclubBook => {
    if (!id) throw new Error('Id is required');
    if (!book) throw new Error('Book is required');
    if (!bookclub) throw new Error('Bookclub is required');
    if (!status) throw new Error('Status is required');

    const existingBookclubBook = bookclubBookDb.getBookclubBookById(bookclub);
    if (existingBookclubBook) throw new Error('This bookclub book with this id already exists.');

    // const existingBookInBookclub = bookclubBookDb.getBookclubBookById(bookclub);
    // if (existingBookclubBook) throw new Error('This book is already in this bookclub.');

    const existingBook = bookDb.getBookByIsbn(book)
    if (!existingBook) throw new Error('This book does not exist.');

    const existingBookclub = bookclubBookDb.getBookclubBookById(bookclub);
    if (!existingBookclub) throw new Error('This bookclub does not exist.');

    const bookclubBook = new BookclubBook({id, book, bookclub, status, startDate, finishDate});
    return bookclubBookDb.createBookclubBook(bookclubBook);
};

const getAllBookclubBooks = (): BookclubBook[] => {
    const bookclubBooks = bookclubBookDb.getAllBookclubBooks();
    return bookclubBooks;
};

const getBookclubBookById = (id: number): BookclubBook | undefined => {
    const bookclubBook = bookclubBookDb.getBookclubBookById(id);
    if (!bookclubBook) throw new Error('No bookclubBook with this id.');
    return bookclubBook;
};

export default {
    createBookclubBook,
    getAllBookclubBooks,
    getBookclubBookById,
};