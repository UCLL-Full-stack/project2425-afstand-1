import { Book } from "../model/book";

const books: Book[] = [
    new Book({ 
        isbn: '9780141439570',
        title: 'The Picture Of Dorian Gray',
        author: 'Oscar Wilde',
        year: 2003,
        pages: 304,
        description: '**The Picture of Dorian Gray** by Oscar Wilde is a gothic masterpiece that explores themes of beauty, morality, and corruption. The story follows Dorian Gray, a handsome and vain young man, who wishes that his portrait would age in his place. His wish is mysteriously granted, allowing him to pursue a hedonistic lifestyle without visible consequences. As Dorian delves deeper into debauchery, his portrait grotesquely reflects the moral decay of his soul. Wilde’s provocative tale is a haunting examination of vanity, the price of indulgence, and the duality of human nature.' 
    }),
    new Book({ 
        isbn: '9780307277671',
        title: 'The Road',
        author: 'Cormac McCarthy',
        year: 2006,
        pages: 287,
        description: '**The Road** is a bleak yet moving post-apocalyptic novel that follows a father and son as they journey through a devastated landscape. With sparse prose and haunting imagery, McCarthy explores themes of survival, love, and the enduring human spirit in the face of desolation.'
    }),
    new Book({ 
        isbn: '9780061120084',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 2006,
        pages: 336,
        description: '**To Kill a Mockingbird** is a powerful tale of justice and racial inequality in the American South, told through the eyes of a young girl. Harper Lee’s classic novel remains a profound and deeply moving commentary on morality and human nature.'
    }),
    new Book({ 
        isbn: '9781451673319',
        title: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        year: 2012,
        pages: 249,
        description: '**Fahrenheit 451** presents a dystopian future where books are banned and "firemen" burn them. Bradbury’s chilling vision is a powerful warning about censorship, conformity, and the loss of intellectual freedom.'
    }),
    new Book({ 
        isbn: '9780385472579',
        title: 'Things Fall Apart',
        author: 'Chinua Achebe',
        year: 1994,
        pages: 209,
        description: '**Things Fall Apart** is a seminal African novel that tells the tragic story of Okonkwo, a proud Igbo warrior whose life is upended by colonialism and cultural upheaval. Achebe’s work is a powerful exploration of identity, tradition, and change.'
    }),
    new Book({ 
        isbn: '9780743273565',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 2004,
        pages: 180,
        description: '**The Great Gatsby** is a poignant critique of the American Dream, following the enigmatic Jay Gatsby and his obsession with wealth, status, and love. Fitzgerald’s lyrical prose captures the glitz and disillusionment of the Roaring Twenties.'
    }),    
];

const createBook = (book: Book): Book => {
    books.push(book);
    return book;
};

const getAllBooks = (): Book[] => books;

const getBookByIsbn = (isbn: string): Book | undefined => {
    return books.find((book) => book.getIsbn() === isbn);
};

export default {
    createBook,
    getAllBooks,
    getBookByIsbn,
};