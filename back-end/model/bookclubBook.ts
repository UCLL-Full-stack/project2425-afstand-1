import { Status } from "../types";
import { Book } from "./book";
import { Bookclub } from "./bookclub";


export class BookclubBook {
    private book: Book;
    private bookclub: Bookclub;
    private status: Status;
    private startDate?: Date;
    private finishDate?: Date;

    constructor(bookclubbook: {
        book: Book;
        bookclub: Bookclub;
        status: Status;
        startDate?: Date;
        finishDate?: Date;
    }) {
        this.book = bookclubbook.book;
        this.bookclub = bookclubbook.bookclub;
        this.status = bookclubbook.status;
        this.startDate = bookclubbook.startDate;
        this.finishDate = bookclubbook.finishDate;
    }

    validate(bookclubBook: {}) {

    }

    getBook() : Book {
        return this.book;
    }

    getBookclub() : Bookclub {
        return this.bookclub;
    }

    getStatus() : Status {
        return this.status;
    }

    getStartDate() : Date | undefined {
        return this.startDate;
    }

    getFinishDate() : Date | undefined {
        return this.finishDate;
    }

    equals(bookclubBook: BookclubBook): boolean {
        return (
            this.book === bookclubBook.getBook() &&
            this.bookclub === bookclubBook.getBookclub() &&
            this.status === bookclubBook.getStatus() &&
            this.startDate === bookclubBook.getStartDate() &&
            this.finishDate === bookclubBook.getFinishDate()
        );
    }

}