import { Injectable } from '@nestjs/common'
import { Post } from './post.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postsRepository: Repository<Post>
  ) {}

  findAll(): Promise<Post[]> {
    return this.postsRepository.find()
  }
}
