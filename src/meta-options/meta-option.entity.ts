import { Post } from 'src/posts/post.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class MetaOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'json', nullable: false })
  metaValue: string;

  @CreateDateColumn()
  createData: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @JoinColumn()
  @OneToOne(() => Post, (post) => post.metaOptions, { onDelete: 'CASCADE' })
  post: Post;
}
