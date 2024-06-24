import { IComment } from "../comment/IComment";
import { IInteraction } from "../interaction/IInteraction";
import { IUser } from "../user/IUser";

export interface IPost{
    id: string;
    author: IUser;
    text: string;
    media: string[];
    createdAt: string;
    interactions: IInteraction[];
    comments: IComment[];
    shares: IPost[];
}