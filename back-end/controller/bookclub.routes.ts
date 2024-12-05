/**
 * @swagger
 *   components:
 *    schemas:
 *      Bookclub:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *              format: int64
 *            creator:
 *              $ref: '#/components/schemas/User'
 *            name:
 *              type: string
 *              description: Name of bookclub.
 *            description:
 *              type: string
 *              description: Description of the bookclub.
 *            members:
 *              type: array
 *              items:
 *                  $ref: '#/components/schemas/User'
 *            books:
 *              type: array
 *              items:
 *                  $ref: '#/components/schemas/Book'
 *      BookclubInput:
 *          type: object
 *          properties:
 *            Creator:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      format: int64
 *            name:
 *               type: string
 *               description: Name of bookclub.
 *              
 */

import express, { NextFunction, Request, Response } from 'express';
import { BookclubInput } from '../types';
import bookclubService from '../service/bookclub.service';

const bookclubRouter = express.Router();

/**
 * @swagger
 * /bookclubs:
 *   post:
 *      summary: Create a new bookclub with an existing creator.
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/BookInput'
 *      responses:
 *        200:
 *           description: The created bookclub.
 *           content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Bookclub'
 */

bookclubRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bookclubs = await bookclubService.getAllBookclubs();
        res.status(200).json(bookclubs);
    } catch (error) {
        next(error);
    }
});

bookclubRouter.post('/', async ( req:Request, res: Response, next: NextFunction ) => {
    try {
        const bookclub = <BookclubInput>req.body;
        const result = await bookclubService.createBookclub(bookclub);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}); 



export  { bookclubRouter };