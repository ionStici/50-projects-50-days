import { Body, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';

@Injectable()
export class PostsService {
  constructor(
    /**
     * Inject postsRepository
     */
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,

    /**
     * Inject metaOptionsRepository
     */
    @InjectRepository(MetaOption)
    public readonly metaOptionsRepository: Repository<MetaOption>,

    /**
     * Injecting Users Service
     */
    private readonly usersService: UsersService,
  ) {}

  /**
   * Creating new posts
   */
  public async create(@Body() createPostDto: CreatePostDto) {
    // Create post
    const post = this.postRepository.create(createPostDto);

    // Return the post
    return await this.postRepository.save(post);
  }

  public async findAll(userId: string) {
    const user = this.usersService.findOneById(userId);

    // Fetch all data from database
    // const posts = await this.postRepository.find();

    // Fetch all posts along with relations
    // const posts = await this.postRepository.find({
    //   relations: { metaOptions: true },
    // });

    const posts = await this.postRepository.find();

    return posts;
  }

  public async delete(id: number) {
    // Deleting the post
    await this.postRepository.delete(id);

    // Confirmation
    return { deleted: true, id };
  }
}
