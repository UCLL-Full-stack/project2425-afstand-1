import { Book } from "../model/book";

const books: Book[] = [
    new Book( { 
        isbn: '9780141439570',
        title: 'The Picture Of Dorian Gray',
        author: 'Oscar Wilde',
        year: 2003,
        pages: 304,
        description: '**The Picture of Dorian Gray** by Oscar Wilde is a gothic masterpiece that explores themes of beauty, morality, and corruption. The story follows Dorian Gray, a handsome and vain young man, who wishes that his portrait would age in his place. His wish is mysteriously granted, allowing him to pursue a hedonistic lifestyle without visible consequences. As Dorian delves deeper into debauchery, his portrait grotesquely reflects the moral decay of his soul. Wilde’s provocative tale is a haunting examination of vanity, the price of indulgence, and the duality of human nature.' 
    }),
];

const createBook = (book: Book): Book => {
    books.push(book);
    return book;
};

const getAllBooks = (): Book[] => books;

const getBookByIsbn = (isbn: string): Book | undefined => {
    return books.find((book) => book.getIsbn() === isbn);
};

export default {
    createBook,
    getAllBooks,
    getBookByIsbn,
};