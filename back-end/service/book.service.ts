import { Book } from "../model/book";
import bookDb from "../repository/book.db";
import { BookInput } from "../types";

const createBook = ({
    isbn,
    title,
    author,
    year,
    pages,
    description,
}: BookInput): Book => {
    if (!isbn) throw new Error('Isbn is required');
    if (!title) throw new Error('Title is required');
    if (!author) throw new Error('Author is required');
    if (!description) throw new Error('Description is required');

    const existingBook = bookDb.getBookByIsbn(isbn);
    if (existingBook) throw new Error('This book already exists.');

    const book = new Book({isbn, title, author, year, pages, description});
    return bookDb.createBook(book);
};

const getAllBooks = (): Book[] => {
    const books = bookDb.getAllBooks();
    return books;
};

const getBookByIsbn = (isbn: string): Book | undefined => {
    const book = bookDb.getBookByIsbn(isbn);
    if (!book) throw new Error('No book with this isbn.');
    return book;
};

export default {
    createBook,
    getAllBooks,
    getBookByIsbn
};