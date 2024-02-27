import { Injectable } from '@nestjs/common';
import { CreateMemoDto } from './dto/create-memo.dto';
import { UpdateMemoDto } from './dto/update-memo.dto';
import { QueryMemoDto } from './dto/query-memo.dto';
import { StatisticsDto } from './dto/statistics.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, In, Like, Repository } from 'typeorm';
import { Memo } from './entities/memo.entity';

@Injectable()
export class MemoService {
  constructor(@InjectRepository(Memo) private MemoRepo: Repository<Memo>) {}

  statistics(statisticsDto: StatisticsDto) {
    return {};
  }

  async list(queryMemoDto: QueryMemoDto) {
    const { search = '', page = 1, size = 10, begin, end } = queryMemoDto;

    console.log(queryMemoDto);
    const list = await this.MemoRepo.find({
      where: {
        content: Like(`%${search}%`),
        created: Between(begin, end),
      },
      take: size,
      skip: size * (page - 1),
      relations: {
        tags: true,
      },
    });

    return list;

    // const qb = this.MemoRepo.createQueryBuilder('memo');
    // if (search)
    //   await qb.where('memo.content like :search', { search: `%${search}%` });

    // if (begin && end) {
    //   await qb.where('memo.created between :begin and :end', { begin, end });
    // }

    // await qb.skip(size * (page - 1)).take(size);
    // console.log(qb.getSql());
    // return qb.getMany();
  }

  create(createMemoDto: CreateMemoDto) {
    return 'This action adds a new memo';
  }

  findAll() {
    return `This action returns all memo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} memo`;
  }

  update(id: number, updateMemoDto: UpdateMemoDto) {
    return `This action updates a #${id} memo`;
  }

  remove(id: number) {
    return `This action removes a #${id} memo`;
  }
}
