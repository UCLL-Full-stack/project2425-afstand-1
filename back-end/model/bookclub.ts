import { Book } from "./book";
import { User } from "./user";

export class Bookclub {
    private id?: number;
    private creator: User;
    private name: string;
    private description?: string;
    private members: User[];
    private books: Book[];

    constructor(bookclub: {
        id?: number;
        creator: User;
        name: string;
        description?: string;
        members?: User[];
        books?: Book[];
    }) {
        this.validate(bookclub);

        this.id = bookclub.id;
        this.creator = bookclub.creator;
        this.name = bookclub.name;
        this.description = bookclub.description;
        this.members = bookclub.members || [this.creator];
        this.books = bookclub.books || [];
    }

    validate(bookclub: { name: string }) {
        const trimmedName = bookclub.name.trim()

        if (!bookclub.name) {
            throw new Error('Name is required');
        }

        if (trimmedName != bookclub.name) {
            throw new Error('Name cannot start or end with whitespaces');
        }

        if (bookclub.name.length < 3) {
            throw new Error('Name is too short')
        }

        if (bookclub.name.length > 50) {
            throw new Error('Name is too long')
        }
    }

    getId(): number | undefined {
        return this.id;
    }

    getCreator(): User {
        return this.creator;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string | undefined {
        return this.description;
    }

    getMembers(): User[] {
        return this.members;
    }

    getBooks(): Book[] {
        return this.books;
    }

    addMemberToBookclub(member: User) {
        // if (!this.members.includes(member)) {
        //     this.members.push(member);
        // }
        const findUser = this.members.find((m) => m.getId() === member.getId());
        if (findUser) {
            throw new Error('User is already a member of this bookclub.')
        }
        this.members.push(member);
    }
 
    addBookToBookclub(book: Book) {
        const findBook = this.books.find((b) => b.getIsbn() === book.getIsbn());
        if (findBook) {
            throw new Error('Book has already been assigned to this bookclub.');
        }
        this.books.push(book);
    }

    equals(bookclub: Bookclub): boolean {
        return (
            this.id === bookclub.getId() &&
            this.creator === bookclub.getCreator() &&
            this.name === bookclub.getName() &&
            this.description === bookclub.getDescription() &&
            this.members.every((member, index) => member.equals(bookclub.getMembers()[index])) &&
            this.books.every((book, index) => book.equals(bookclub.getBooks()[index]))
        );
    }
}