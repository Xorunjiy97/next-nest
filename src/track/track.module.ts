import { MongooseModule } from '@nestjs/mongoose';
import { TrackService } from './track.service';
import { TrackController } from './track.constroller';
import { Module } from '@nestjs/common';
import { Track, TrackSchema } from './schemas/track.shema';
import { CommentSchema, Comment } from './schemas/track.comments.shema';

@Module({
    imports: [
        MongooseModule.forFeature([{name: Track.name, schema: TrackSchema}]),
        MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}])
    ],
    controllers: [TrackController],
    providers: [TrackService],
})
export class TrackModule {}