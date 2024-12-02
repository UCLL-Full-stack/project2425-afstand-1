import { Bookclub } from "../../model/bookclub";
import { User } from "../../model/user";
import bookclubDb from "../../repository/bookclub.db";
import userDb from "../../repository/user.db";
import bookclubService from "../../service/bookclub.service";
import { UserInput } from "../../types";

const userInput: UserInput = {
    id: 1,
    username: 'kimberlyaustria',
    firstName: 'Kimberly',
    lastName: 'Austria',
    email: 'kimberlyaustria@example.com',
    password: 'test.Passw0rd',
};

const creator = new User({
    ...userInput
});

const name = 'The babies';

const description = 'We are the babies and we love to read!';

let createBookclubMock: jest.Mock;

let mockUserDbGetUserById: jest.Mock;
let mockBookclubDbGetBookclubByName: jest.Mock;

let getAllBookclubsMock: jest.Mock;

beforeEach(() => {
    mockUserDbGetUserById = jest.fn();
    mockBookclubDbGetBookclubByName = jest.fn();

    createBookclubMock = jest.fn();

    getAllBookclubsMock = jest.fn();
});


afterEach(() => {
    jest.clearAllMocks;
});


test('given a valid bookclub, when bookclub is created, then bookclub is created with those values', () => {
    // given
    userDb.getUserById = mockUserDbGetUserById.mockReturnValue(creator);

    bookclubDb.createBookclub = createBookclubMock;
    
    // when
    const bookclub = bookclubService.createBookclub({
        creator: userInput,
        name,
        description,
    });

    // then
    expect(createBookclubMock).toHaveBeenCalledTimes(1);
    expect(createBookclubMock).toHaveBeenCalledWith(
        new Bookclub({ creator, name, description })
    );
    expect(createBookclubMock).toHaveReturnedWith(bookclub);
});

test('given a bookclub with existing name, when bookclub is created, then an error is thrown', () => {
    // given
    userDb.getUserById = mockUserDbGetUserById.mockReturnValue(creator);

    bookclubDb.getBookclubByName = mockBookclubDbGetBookclubByName.mockReturnValue(
        new Bookclub({ creator, name, description })
    );

    // when
    const createBookclub = () =>
        bookclubService.createBookclub({
            creator: userInput,
            name,
            description
        });

    // then
    expect(createBookclub).toThrow('A bookclub with this name already exists.')
});

test('given a bookclub with no existing creator, when bookclub is created, then an error is thrown', () => {
    // given
    userDb.getUserById = mockUserDbGetUserById.mockReturnValue(null);

    bookclubDb.createBookclub = createBookclubMock;

    // when
    const createBookclub = () =>
        bookclubService.createBookclub({
            creator: userInput,
            name,
            description
        });
    
    // then
    expect(createBookclub).toThrow('Creator not found')
});

// test('given one bookclub, when getting all bookclubs, then 1 bookclub is shown ', () => {
//     // given
//     const bookclub = new Bookclub({ creator, name, description });
//     getAllBookclubsMock.mockReturnValue([bookclub]);

//     bookclubDb.getAllBookclubs = getAllBookclubsMock;

//     // when
//     const bookclubs = bookclubService.getAllBookclubs();

//     // then
//     expect(getAllBookclubsMock).toHaveBeenCalledTimes(1);
//     expect(getAllBookclubsMock).toHaveReturnedWith(bookclubs);
//     expect(bookclubs).toHaveLength(1);
//     expect(bookclubs).toContain(bookclub);
// });
// IK MOET EEN ADD FUNCTIE MAKEN