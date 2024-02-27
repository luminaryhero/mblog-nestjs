import { Injectable } from '@nestjs/common';
import { CreateSysConfigDto } from './dto/create-sys-config.dto';
import { UpdateSysConfigDto } from './dto/update-sys-config.dto';

@Injectable()
export class SysConfigService {
  create(createSysConfigDto: CreateSysConfigDto) {
    return 'This action adds a new sysConfig';
  }

  findAll() {
    return {};
  }

  findOne(id: number) {
    return `This action returns a #${id} sysConfig`;
  }

  update(id: number, updateSysConfigDto: UpdateSysConfigDto) {
    return `This action updates a #${id} sysConfig`;
  }

  remove(id: number) {
    return `This action removes a #${id} sysConfig`;
  }
}
