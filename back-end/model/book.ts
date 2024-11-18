import { Review } from './review';

export class Book {
    private isbn: number;
    private title: string;
    private author: string;
    private year?: number;
    private pages?: number;
    private description: string;

    constructor(book: {
        isbn: number;
        title: string;
        author: string;
        year?: number;
        pages?: number;
        description: string;
    }) {
        this.validate(book);

        this.isbn = book.isbn;
        this.title = book.title;
        this.author = book.author;
        this.year = book.year;
        this.pages = book.pages;
        this.description = book.description;
    }

    validate(book: { isbn: number; title: string; author: string; year?: number; pages?: number; description: string;}) {
        if (!book.isbn.toString().trim) {
            throw new Error('ISBN is required');
        }
        if (!book.title.trim()) {
            throw new Error('Title is required');
        }
        if (!book.author.trim()) {
            throw new Error('Author is required');
        }
        if (!book.description.trim()) {
            throw new Error('Description is required');
        }

        if (book.year && book.year < 0) {
            throw new Error('Year must be positive')
        }

        if (book.pages && book.pages < 0) {
            throw new Error('Pages must be positive')
        }

        if (book.isbn.toString().length != 13) {
            throw new Error('ISBN should consist of 13 digits')
        }
    }

    getIsbn(): number {
        return this.isbn;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    getYear(): number | undefined {
        return this.year
    }

    getPages(): number | undefined {
        return this.pages
    }

    getDescription (): string {
        return this.description
    }

    equals(book : Book): boolean {
        return (
            this.isbn === book.getIsbn() &&
            this.title === book.getTitle() &&
            this.author === book.getAuthor() &&
            this.year === book.getYear() &&
            this.pages === book.getPages() &&
            this.description === book.getDescription()
        );
    }

}