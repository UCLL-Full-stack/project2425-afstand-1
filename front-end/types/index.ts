export type User = {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

export type Book = {
    isbn: string;
    title: string;
    author: string;
    year: number;
    pages: number;
    description: string;
};

export type Bookclub = {
    id?: number;
    creator: User;
    name: string;
    description: string;
    members: Array<User>;
    books?: Array<Book>;
};

export type Discussion = {
    id?: number;
    title: string;
    description: string;
    postedBy: User;
    datePosted: Date;
};