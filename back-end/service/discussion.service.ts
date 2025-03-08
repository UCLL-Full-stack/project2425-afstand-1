import { Discussion } from "../model/discussion";
import discussionDb from "../repository/discussion.db";
import userDb from "../repository/user.db";
import { DiscussionInput } from "../types";

const createDiscussion = ({
    id,
    title,
    description,
    postedBy: userInput,
    datePosted,
}: DiscussionInput): Discussion => {
    if (!id) throw new Error('An ID is required');
    if (!userInput.id) throw new Error('A postedBy user id is required');
    if (!title) throw new Error('A title is required');
    if (!userInput) throw new Error('A postedBy user is required');
    if (!description) throw new Error('A description is required');

    const postedBy = userDb.getUserById(userInput.id);
    if(!postedBy) throw new Error('Discussion cannot be posted. No user found.');

    const findDiscussion = discussionDb.getDiscussionById(id);
    if (findDiscussion) { 
        throw new Error(`Discussion with ID ${id} already exists`); 
    }
    
    const discussion = new Discussion({ id, title, description, postedBy, datePosted });
    return discussionDb.createDiscussion(discussion);
};

const getAllDiscussions = (): Discussion[] => discussionDb.getAllDiscussions();

const getDiscussionById = (id: number): Discussion => {
    const discussion = discussionDb.getDiscussionById(id);
    if (!discussion) { 
        throw new Error(`Discussion with ID ${id} not found`);
    }
    return discussion;
}

export default {
    createDiscussion,
    getAllDiscussions,
    getDiscussionById,
}

