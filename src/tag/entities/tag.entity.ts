import { Memo } from 'src/memo/entities/memo.entity';
import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Memo, (memo) => memo.tags)
  memoList: Relation<Memo[]>;
}
