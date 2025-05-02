import { Status } from "../types";
import { Book } from "./book";
import { Bookclub } from "./bookclub";


export class BookclubBook {
    private id: number;
    private book: string;
    private bookclub: number;
    private status: Status;
    private startDate?: Date;
    private finishDate?: Date;

    constructor(bookclubBook: {
        id: number;
        book: string;
        bookclub: number;
        status: Status;
        startDate?: Date;
        finishDate?: Date;
    }) {
        this.validate(bookclubBook);

        this.id = bookclubBook.id;
        this.book = bookclubBook.book;
        this.bookclub = bookclubBook.bookclub;
        this.status = bookclubBook.status;
        this.startDate = bookclubBook.startDate;
        this.finishDate = bookclubBook.finishDate;
    }

    validate(bookclubBook: { id: number; book: string; bookclub: number; status: Status }) {
        if (!bookclubBook.id) {
            throw new Error("ID is required");
        }

        if (!bookclubBook.book) {
            throw new Error("Book is required");
        }

        if (!bookclubBook.bookclub) {
            throw new Error("Bookclub is required");
        }

        if (!bookclubBook.status) {
            throw new Error("Status is required");
        }
    }

    getId(): number {
        return this.id;
    }

    getBook() : string {
        return this.book;
    }

    getBookclub() : number {
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
            this.id === bookclubBook.getId() &&
            this.book === bookclubBook.getBook() &&
            this.bookclub === bookclubBook.getBookclub() &&
            this.status === bookclubBook.getStatus() &&
            this.startDate === bookclubBook.getStartDate() &&
            this.finishDate === bookclubBook.getFinishDate()
        );
    }

}