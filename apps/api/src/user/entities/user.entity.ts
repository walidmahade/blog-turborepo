import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { CommentEntity } from 'src/comment/entities/comment.entity';
import { Like } from 'src/like/entities/like.entity';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String, { nullable: true })
  bio?: string;

  @Field(() => String, { nullable: true })
  avatar?: string;

  @Field(() => [Post])
  posts: Post[];

  @Field(() => [CommentEntity])
  comments: CommentEntity[];

  @Field(() => [Like])
  likes: Like[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
