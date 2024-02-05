import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  // UseGuards,
} from '@nestjs/common';
import { BeitCnesetService } from './beit-cneset.service';
import { CreateBeitCnesetDto } from './dto/create-beit-cneset.dto';
import { UpdateBeitCnesetDto } from './dto/update-beit-cneset.dto';
// import { LoginGuard } from 'src/auth/guards/login/login.guard';
// import { AdminGuard } from 'src/auth/guards/admin/admin.guard';

@Controller('beit-cneset')
export class BeitCnesetController {
  constructor(private readonly beitCnesetService: BeitCnesetService) {}

  @Post()
  create(@Body() createBeitCnesetDto: CreateBeitCnesetDto) {
    return this.beitCnesetService.create(createBeitCnesetDto);
  }

  // @UseGuards(LoginGuard)
  @Get()
  findAll() {
    return this.beitCnesetService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.beitCnesetService.findOne(name);
  }

  @Put(':name')
  update(
    @Param('name') name: string,
    @Body() updateBeitCnesetDto: UpdateBeitCnesetDto
  ) {
    return this.beitCnesetService.update(name, updateBeitCnesetDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.beitCnesetService.remove(name);
  }

  @Delete()
  removeAll() {
    return this.beitCnesetService.removeAll();
  }

  @Post(`reload`)
  seedData() {
    return this.beitCnesetService.seedData();
  }
}
