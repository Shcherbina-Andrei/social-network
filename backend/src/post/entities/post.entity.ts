import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/entities/user.entity';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  text: string;

  @Prop({ type: mongoose.Schema.ObjectId, ref: 'User' })
  authorId: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);
