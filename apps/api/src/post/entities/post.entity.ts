import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CommentEntity } from 'src/comment/entities/comment.entity';
import { Like } from 'src/like/entities/like.entity';
import { User } from 'src/user/entities/user.entity';
import { Tag } from 'src/tag/entities/tag.entity';
@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  slug?: string;

  @Field(() => String)
  content: string;

  @Field(() => String)
  thumbnail?: string;

  @Field(() => Boolean)
  published: boolean;

  @Field(() => User)
  author: User;

  @Field(() => [CommentEntity])
  comments: CommentEntity[];

  @Field(() => [Tag])
  tags: Tag[];

  @Field(() => [Like])
  likes: Like[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
