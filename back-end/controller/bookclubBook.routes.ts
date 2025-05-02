import express, { NextFunction, Request, Response } from 'express';
import bookclubBookService from '../service/bookclubBook.service';
import { BookclubBookInput } from '../types';

const bookclubBookRouter = express.Router();

bookclubBookRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bookclubBooks = await bookclubBookService.getAllBookclubBooks();
        if (bookclubBooks.length === 0) { 
            return res.status(200).json({ message: "No books found." });
        };
        res.status(200).json(bookclubBooks);
    } catch (error) {
        next(error);
    }
});

bookclubBookRouter.post('/', async ( req:Request, res: Response, next: NextFunction ) => {
    try {
        const bookclubBook = <BookclubBookInput>req.body;
        const result = await bookclubBookService.createBookclubBook(bookclubBook);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}); 

bookclubBookRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id);
        const books = await bookclubBookService.getBookclubBookById(id);
        res.status(200).json(books);
    } catch (error) {
        next(error);
    }
});


export { bookclubBookRouter };