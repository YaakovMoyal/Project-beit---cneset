import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  NotFoundException,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginGuard } from '../auth/guards/login/login.guard';
import { OwnerGuard } from '../auth/guards/owner/owner.guard';
import { AdminGuard } from '../auth/guards/admin/admin.guard';
import { OwnerOrAdminGuard } from '../auth/guards/owner-or-admin/owner-or-admin.guard';
import { LoginUserDto } from './dto/login.user.dto';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return this.usersService.create(createUserDto);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Post('/login')
  async login(@Body() userInfo: LoginUserDto) {
    try {
      return await this.usersService.login(userInfo);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get()
  @UseGuards(LoginGuard, AdminGuard)
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(30)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @UseGuards(LoginGuard, OwnerOrAdminGuard)
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(30)
  findOne(@Param('id') id: string) {
    try {
      return this.usersService.findOne(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      return this.usersService.update(id, updateUserDto);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @UseGuards(LoginGuard, OwnerGuard)
  @Delete(':id')
  removeByID(@Param('id') id: string) {
    try {
      return this.usersService.removeByID(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @UseGuards(LoginGuard, AdminGuard)
  @Delete()
  removeAll() {
    return this.usersService.removeAll();
  }
}
