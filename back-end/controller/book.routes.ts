/**
 * @swagger
 *   components:
 *    schemas:
 *      Book:
 *          type: object
 *          properties:
 *            isbn:
 *              type: string
 *              description: ISBN-13 of the book.
 *            title:
 *              type: string
 *              description: Title of the book.
 *            author:
 *              type: string
 *              description: Author of the book.
 *            year:
 *              type: number
 *              format: int64
 *              description: Year the book was published.
 *            pages:
 *              type: number
 *              format: int64
 *              description: Amount of pages the book has.
 *            description:
 *              type: string
 *              description: Description of the book.
 *      BookInput:
 *          type: object
 *          properties:
 *            isbn:
 *              type: string
 *              description: ISBN-13 of the book.
 *            title:
 *              type: string
 *              description: Title of the book.
 *            author:
 *              type: string
 *              description: Author of the book.
 *            description:
 *              type: string
 *              description: Description of the book.
 */

import express, { NextFunction, Request, Response } from 'express';
import bookService from '../service/book.service';
import { BookInput } from '../types';

const bookRouter = express.Router();

/**
 * @swagger
 * /books:
 *   post:
 *      summary: Create a new book.
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/BookInput'
 *      responses:
 *        200:
 *           description: The created book.
 *           content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Book'
 *   get:
 *     summary: Get a list of all books.
 *     responses:
 *       200:
 *         description: A list of books. If there are no books then message is shown.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Book'
 * /books/{isbn}:
 *   get:
 *     summary: Get book with isbn.
 *     parameters:
 *      - in: path 
 *        name: isbn 
 *        required: true 
 *        description: The ISBN of the book to retrieve. 
 *        schema: 
 *          type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the book details.
 *         content:
 *           application/json:
 *             schema:
 *                  $ref: '#/components/schemas/Book'
 */

bookRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const books = await bookService.getAllBooks();
        if (books.length === 0) { 
            return res.status(200).json({ message: "No books found." });
        };
        res.status(200).json(books);
    } catch (error) {
        next(error);
    }
});

bookRouter.post('/', async ( req:Request, res: Response, next: NextFunction ) => {
    try {
        const book = <BookInput>req.body;
        const result = await bookService.createBook(book);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}); 

bookRouter.get('/:isbn', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const isbn = req.params.isbn;
        const books = await bookService.getBookByIsbn(isbn);
        res.status(200).json(books);
    } catch (error) {
        next(error);
    }
});


export { bookRouter };