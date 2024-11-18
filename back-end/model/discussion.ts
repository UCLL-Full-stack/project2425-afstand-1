import { User } from "./user";

export class Discussion {
    private id?: number;
    private title: string;
    private description: string;
    private postedBy: User;
    private datePosted: Date;

    constructor(discussion: {
        id?: number;
        title: string;
        description: string;
        postedBy: User;
        datePosted: Date;
    }) {
        this.validate(discussion);

        this.id = discussion.id;
        this.title = discussion.title;
        this.description = discussion.description;
        this.postedBy = discussion.postedBy;
        this.datePosted = discussion.datePosted ||  new Date();
    }

    getId(): number | undefined {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getDescription(): string {
        return this.description;
    }

    getPostedBy(): User {
        return this.postedBy;
    }

    getDatePosted(): Date {
        return this.datePosted;
    }

    validate(discussion: { title: string; description: string; }) {
        if (!discussion.title) {
            throw new Error('Title is required')
        }

        if (!discussion.description) {
            throw new Error('Description is required')
        }

        if (!discussion.title) {
            throw new Error('Title is required')
        }
    }

    equals(discussion: Discussion): boolean {
        return (
            this.id === discussion.getId() &&
            this.title === discussion.getTitle() &&
            this.description === discussion.getDescription() &&
            this.postedBy === discussion.getPostedBy() &&
            this.datePosted === discussion.getDatePosted()
        );
    }
}