import { Book } from "../../model/book";
import { Bookclub } from "../../model/bookclub";
import { User } from "../../model/user";

const name = 'Babies reading'
const creator = new User({ username: 'kimberlyaustria', firstName: 'Kimberly', lastName: 'Austria', email: 'kimberlyaustria@example.com', password: 'test.Passw0rd' })
const description = 'We are the babies and we love to read!'

test('given: valid values for bookclub, when: creating bookclub, then: bookclub is created with those values', () => {
    // given creator, name, description

    // when
    const bookclub = new Bookclub({ creator, name, description, books: [] })

    // then
    expect(bookclub.getName()).toEqual(name);
    expect(bookclub.getCreator()).toEqual(creator);
    expect(bookclub.getDescription()).toEqual(description);
    expect(bookclub.getMembers()).toContain(creator);
    expect(bookclub.getBooks()).toHaveLength(0);
});

test('given: valid values for bookclub, when: creating a bookclub, then: bookclub is created without any books', () => {
    // given

    // when 
    const bookclub = new Bookclub({ creator, name, description, books: [] })

    // then
    expect(bookclub.getBooks()).toHaveLength(0);
});

test('given: creator, when: creating bookclub, then: creator is automatically member of the bookclub', () => {
    // given creator

    // when 
    const bookclub = new Bookclub({ creator, name, description, books: [] })

    // then
    expect(bookclub.getMembers()).toHaveLength(1);
    expect(bookclub.getMembers()).toContain(creator);
});

test('given: empty name, when: creating bookclub, then: an error is thrown', () =>  {
    // given
    const name = ''

    // when
    const bookclub = () => new Bookclub({ creator, name, description, books: [] })

    // then
    expect(bookclub).toThrow('Name is required');
});

test('given: name with trailing whitespaces, when: creating bookclub, then: an error is thrown', () =>  {
    // given
    const name = '  The Babes  '

    // when
    const bookclub = () => new Bookclub({ creator, name, description, books: [] })

    // then
    expect(bookclub).toThrow('Name cannot start or end with whitespaces');
});

test('given: name too short, when: creating bookclub, then: an error is thrown', () =>  {
    // given
    const name = 'AB'

    // when
    const bookclub = () => new Bookclub({ creator, name, description, books: [] })

    // then
    expect(bookclub).toThrow('Name is too short');
});

test('given: name too long, when: creating bookclub, then: an error is thrown', () =>  {
    // given
    const name = 'The Society for Enthusiastic Readers and Literary Explorers'

    // when
    const bookclub = () => new Bookclub({ creator, name, description, books: [] })

    // then
    expect(bookclub).toThrow('Name is too long');
});

test('given: an existing user, when: adding a user to bookclub, then: user becomes a member of the bookclub', () => {
    // given
    const member = new User({ username: 'jerryaustria', firstName: 'Jerry', lastName: 'Austria', email: 'jerryaustria@example.com', password: 'test.Passw0rd' })
    const bookclub = new Bookclub({ creator, name, description, books: [] })

    // when 
    bookclub.addMemberToBookclub(member);

    // then
    expect(bookclub.getMembers()).toHaveLength(2);
    expect(bookclub.getMembers()).toContain(creator);
    expect(bookclub.getMembers()).toContain(member);
});

test('given: an existing book, when: adding a book to bookclub, then: book is added to the booklcub', () => {
    // given
    const book = new Book( { isbn: '9780141439570' , title: 'The Picture Of Dorian Gray', author: 'Oscar Wilde', year: 2003 , pages: 304 , description: '**The Picture of Dorian Gray** by Oscar Wilde is a gothic masterpiece that explores themes of beauty, morality, and corruption. The story follows Dorian Gray, a handsome and vain young man, who wishes that his portrait would age in his place. His wish is mysteriously granted, allowing him to pursue a hedonistic lifestyle without visible consequences. As Dorian delves deeper into debauchery, his portrait grotesquely reflects the moral decay of his soul. Wilde’s provocative tale is a haunting examination of vanity, the price of indulgence, and the duality of human nature.' })
    const bookclub = new Bookclub({ creator, name, description, books: [] })

    // when 
    bookclub.addBookToBookclub(book);

    // then
    expect(bookclub.getBooks()).toHaveLength(1);
    expect(bookclub.getBooks()).toContain(book);
});

