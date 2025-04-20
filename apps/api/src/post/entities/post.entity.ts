import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Field(() => String, { description: 'Example field (placeholder)' })
  title: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  slug?: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  content: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  thumbnail?: string;

  @Field(() => Boolean, { description: 'Example field (placeholder)' })
  published: boolean;

  @Field(() => Date, { description: 'Example field (placeholder)' })
  createdAt: Date;

  @Field(() => Date, { description: 'Example field (placeholder)' })
  updatedAt: Date;

  // @Field(() => User, { description: 'Example field (placeholder)' })
  // author: User;

  // @Field(() => [Comment], { description: 'Example field (placeholder)' })
  // comments: Comment[];
}
