import { Module } from '@nestjs/common'
import { PostsService } from './posts.service'
import { PostsResolver } from './posts.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthorsModule } from 'src/authors/authors.module'
import { Post } from './entities/post.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Post]), AuthorsModule],
  providers: [PostsService, PostsResolver]
})
export class PostsModule {}
