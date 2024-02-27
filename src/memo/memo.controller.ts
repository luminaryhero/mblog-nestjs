import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MemoService } from './memo.service';
import { CreateMemoDto } from './dto/create-memo.dto';
import { UpdateMemoDto } from './dto/update-memo.dto';
import { QueryMemoDto } from './dto/query-memo.dto';
import { StatisticsDto } from './dto/statistics.dto';

@Controller('memo')
export class MemoController {
  constructor(private readonly memoService: MemoService) {}

  @Post()
  create(@Body() createMemoDto: CreateMemoDto) {
    return this.memoService.create(createMemoDto);
  }

  @Post('list')
  list(@Body() queryMemoDto: QueryMemoDto) {
    return this.memoService.list(queryMemoDto);
  }

  @Post('statistics')
  statistics(@Body() statisticsDto: StatisticsDto) {
    return this.memoService.statistics(statisticsDto);
  }

  @Get()
  findAll() {
    return this.memoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemoDto: UpdateMemoDto) {
    return this.memoService.update(+id, updateMemoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memoService.remove(+id);
  }
}
