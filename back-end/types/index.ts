type UserInput = {
    id?: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

type BookInput = {
    isbn: string;
    title: string;
    author: string;
    year: number;
    pages: number;
    description: string;
}

type BookclubInput = {
    id?: number;
    creator: UserInput;
    name: string;
    description: string;
    members?: UserInput[];
    books?: BookclubBookInput[];
};

type DiscussionInput = {
    id?: number;
    title: string;
    description: string;
    postedBy: UserInput;
    datePosted: Date;
}

enum Status {
    TO_READ = 'TO_READ',
    CURRENTLY_READING = 'CURRENTLY_READING',
    READ = 'READ'
}

type BookclubBookInput = {
    id: number;
    book: string;
    bookclub: number;
    status: Status;
    startDate?: Date;
    finishDate?: Date;
}

export {
    UserInput,
    BookInput,
    BookclubInput,
    DiscussionInput,
    Status,
    BookclubBookInput,
};