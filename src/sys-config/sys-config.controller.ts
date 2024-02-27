import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SysConfigService } from './sys-config.service';
import { CreateSysConfigDto } from './dto/create-sys-config.dto';
import { UpdateSysConfigDto } from './dto/update-sys-config.dto';

@Controller('sysConfig')
export class SysConfigController {
  constructor(private readonly sysConfigService: SysConfigService) {}

  @Post()
  create(@Body() createSysConfigDto: CreateSysConfigDto) {
    return this.sysConfigService.create(createSysConfigDto);
  }

  @Get()
  findAll() {
    return this.sysConfigService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sysConfigService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSysConfigDto: UpdateSysConfigDto,
  ) {
    return this.sysConfigService.update(+id, updateSysConfigDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sysConfigService.remove(+id);
  }
}
