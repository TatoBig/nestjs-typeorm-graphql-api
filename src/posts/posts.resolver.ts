import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent
} from '@nestjs/graphql'
import { Author } from 'src/authors/entities/author.entity'
import { CreatePostInput } from './dto/create-post.input'
import { Post } from './entities/post.entity'
import { PostsService } from './posts.service'

@Resolver((of) => Post)
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query((returns) => [Post])
  posts() {
    return this.postsService.findAll()
  }

  @Query((returns) => Post)
  post(@Args('id', { type: () => Int }) id: number) {
    return this.postsService.findById(id)
  }

  @ResolveField((returns) => Author)
  author(@Parent() post: Post): Promise<Author> {
    return this.postsService.getAuthor(post.authorId)
  }

  @Mutation((returns) => Post)
  createPost(@Args('postInput') postInput: CreatePostInput) {
    return this.postsService.createPost(postInput)
  }
}
