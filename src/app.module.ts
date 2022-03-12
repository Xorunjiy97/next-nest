import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from './track/track.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://aleksey:4571267aleX@cluster0.ph2ik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    TrackModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
