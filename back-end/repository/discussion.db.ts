import { Discussion } from "../model/discussion";

const discussions: Discussion[] = [];

const createDiscussion = (discussion: Discussion): Discussion => {
    discussions.push(discussion);
    return discussion;
};

const getAllDiscussions = (): Discussion[] => discussions;

const getDiscussionById = (id: number): Discussion | undefined => {
    return discussions.find((discussion) => discussion.getId() === id);
};

export default {
    createDiscussion,
    getAllDiscussions,
    getDiscussionById,
}