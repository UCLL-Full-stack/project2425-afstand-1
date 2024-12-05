export class Book {
    private isbn: string;
    private title: string;
    private author: string;
    private year?: number;
    private pages?: number;
    private description: string;

    constructor(book: {
        isbn: string;
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

    validate(book: { isbn: string; title: string; author: string; year?: number; pages?: number; description: string;}) {
        if (!book.isbn.trim) {
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

        if (!/^(978|979)\d{10}$/.test(book.isbn)) {
            throw new Error('ISBN should be a 13-digit number starting with 978 or 979');
        }
    }

    getIsbn(): string {
        return this.isbn;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    getYear(): number | undefined {
        return this.year;
    }

    getPages(): number | undefined {
        return this.pages;
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