/**
 * @swagger
 *   components:
 *    schemas:
 *      User:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *              format: int64
 *            username:
 *              type: string
 *              description: Username of the user.
 *            firstName:
 *              type: string
 *              description: First name of the user.
 *            lastName:
 *              type: string
 *              description: Last name of the user.
 *            email:
 *              type: string
 *              description: Email of the user.
 *            password:
 *              type: string
 *              description: Password of the user.
 *      UserInput:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *              format: int64
 *            username:
 *              type: string
 *              description: Username of the user.
 *            firstName:
 *              type: string
 *              description: First name of the user.
 *            lastName:
 *              type: string
 *              description: Last name of the user.
 *            email:
 *              type: string
 *              description: Email of the user.
 *            password:
 *              type: string
 *              description: Password of the user.
 */

import express, { NextFunction, Request, Response } from 'express';
import { UserInput } from '../types';
import userService from '../service/user.service';

const userRouter = express.Router();

/**
 * @swagger
 * /users:
 *   post:
 *      summary: Create a new user.
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserInput'
 *      responses:
 *        200:
 *           description: The created user.
 *           content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 */

userRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = <UserInput>req.body;
        const result = await userService.createUser(user);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
});

userRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
});

userRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = Number(req.params.id);
        const user = await userService.getUserById(userId);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
});

export { userRouter };