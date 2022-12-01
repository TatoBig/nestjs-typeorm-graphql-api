import { Field, InputType, Int } from '@nestjs/graphql'
import { IsNotEmpty, MaxLength, IsOptional, IsInt } from 'class-validator'

@InputType()
export class CreatePostInput {
  @MaxLength(100, {
    message: 'El título es muy largo'
  })
  @IsNotEmpty({
    message: 'El título es requerido'
  })
  @Field()
  title: string

  @MaxLength(400)
  @IsOptional()
  @Field({ nullable: true })
  content?: string

  @IsInt()
  @Field()
  authorId: number
}
