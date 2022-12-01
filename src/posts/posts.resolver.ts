import { Resolver, Query } from '@nestjs/graphql'
import { Post } from './post.entity'
import { PostsService } from './posts.service'

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query((returns) => [Post])
  posts() {
    return this.postsService.findAll()
  }
}
