type UserInput = {
    id?: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

type BookInput = {
    isbn: number;
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
    book?: BookInput[];
};

type DiscussionInput = {
    id?: number;
    title: string;
    description: string;
    postedBy: UserInput;
    datePosted: Date;
}

export {
    UserInput,
    BookInput,
    BookclubInput,
    DiscussionInput,
};