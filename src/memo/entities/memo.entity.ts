import { Tag } from 'src/tag/entities/tag.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Memo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @ManyToMany(() => Tag, (tag) => tag.memoList)
  @JoinTable()
  tags: Relation<Tag[]>;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
