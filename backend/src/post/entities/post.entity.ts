import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

export class Post {
  @Prop()
  title: string;

  @Prop()
  text: string;

  @Prop()
  authorId: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
