import { ObjectId } from 'mongoose';
export class CreateCommentDto {
    readonly username: string;
    readonly artist: string;
    readonly trackid: ObjectId;
}