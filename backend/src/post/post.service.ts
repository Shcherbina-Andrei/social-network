import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './entities/post.entity';
import { Model } from 'mongoose';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const createdPost = await this.postModel.create(createPostDto);
    console.log(createdPost);
    return createdPost.save();
  }

  findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async findOne(id: string): Promise<Post> {
    return await this.postModel.findById(id);
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<Post> {
    return await this.postModel.findByIdAndUpdate(id, updatePostDto);
  }

  async remove(id: string): Promise<Post> {
    return await this.postModel.findByIdAndDelete(id);
  }
}
