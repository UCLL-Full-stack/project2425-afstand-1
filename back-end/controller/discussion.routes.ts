/**
 * @swagger
 *   components:
 *    schemas:
 *      Discussion:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *              format: int64
 *              description: Id of the discussion.
 *            title:
 *              type: string
 *              description: Title of the discussion.
 *            description:
 *              type: string
 *              description: Description of the discussion.
 *            postedBy:
 *              $ref: '#/components/schemas/User'
 *              description: User that made the discussion.
 *            datePosted:
 *              type: string
 *              format: date-time
 *              description: Date and time the discussion was posted.
 *      DiscussionInput:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *              format: int64
 *              description: Id of the discussion.
 *            title:
 *              type: string
 *              description: Title of the discussion.
 *            description:
 *              type: string
 *              description: Description of the discussion.
 *            postedBy:
 *              type: object
 *              properties:
 *                id:
 *                  type: number
 *                  format: int64
 *              description: User that made the discussion.
 *            datePosted:
 *              type: string
 *              format: date-time
 *              description: Date and time the discussion was posted.
 */

import express, { NextFunction, Request, Response } from 'express';
import discussionService from '../service/discussion.service';
import { DiscussionInput } from '../types';

const discussionRouter = express.Router();

/**
 * @swagger
 * /discussions:
 *   post:
 *      summary: Create a new discussion.
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/DiscussionInput'
 *      responses:
 *        200:
 *           description: The created discussion.
 *           content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Discussion'
 *   get:
 *     summary: Get a list of all discussions.
 *     responses:
 *       200:
 *         description: A list of discussions. If there are no books then message is shown.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Discussion'
 * /discussions/{id}:
 *   get:
 *     summary: Get discussion with id.
 *     parameters:
 *      - in: path 
 *        name: id 
 *        required: true 
 *        description: The id of the discussion to retrieve. 
 *        schema: 
 *          type: number
 *     responses:
 *       200:
 *         description: Successfully retrieved the discussion details.
 *         content:
 *           application/json:
 *             schema:
 *                  $ref: '#/components/schemas/Discussion'
 */

discussionRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const discussions = await discussionService.getAllDiscussions();
        if (discussions.length === 0) { 
            return res.status(200).json({ message: "No discussions found." });
        };
        res.status(200).json(discussions);
    } catch (error) {
        next(error);
    }
});

discussionRouter.post('/', async ( req:Request, res: Response, next: NextFunction ) => {
    try {
        const discussion = <DiscussionInput>req.body;
        const result = await discussionService.createDiscussion(discussion);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}); 

discussionRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id);
        const discussion = await discussionService.getDiscussionById(id);
        res.status(200).json(discussion);
    } catch (error) {
        next(error);
    }
});

export { discussionRouter };
