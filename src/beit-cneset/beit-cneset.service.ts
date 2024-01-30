import { Inject, Injectable } from '@nestjs/common';
import { CreateBeitCnesetDto } from './dto/create-beit-cneset.dto';
import { UpdateBeitCnesetDto } from './dto/update-beit-cneset.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BeitCnesetIF } from 'src/mongoose/beitCnesetIF';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import initialData from './initialData';

@Injectable()
export class BeitCnesetService {
  constructor(
    @InjectModel('beit-Cneset')
    private readonly beitCnesetModule: Model<BeitCnesetIF>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async create(createBeitCnesetDto: CreateBeitCnesetDto) {
    const newBeitCneset = new this.beitCnesetModule(createBeitCnesetDto);
    await newBeitCneset.save();
    await this.cacheManager.reset();
    return newBeitCneset;
  }

  async findAll() {
    const allBeitCneset = await this.beitCnesetModule.find();
    return allBeitCneset;
  }

  async findOne(name: string) {
    const beitCneset = await this.beitCnesetModule.findOne({ name });
    if (!beitCneset)
      throw new Error(`Beit Cneset with the name "${name}" was not found.`);
    return beitCneset;
  }

  async update(name: string, updateBeitCnesetDto: UpdateBeitCnesetDto) {
    let beitCneset = await this.beitCnesetModule.findOne({ name });

    if (!beitCneset) {
      throw new Error(`Beit Cneset with the name "${name}" was not found.`);
    }

    await this.beitCnesetModule.updateOne({ name }, updateBeitCnesetDto);

    return `Beit Cneset with the name "${name}" has been successfully updated.`;
  }

  async remove(name: string) {
    const beitCneset = await this.beitCnesetModule.findOne({ name });

    if (!beitCneset)
      throw new Error(`Beit Cneset with the name "${name}" was not found.`);

    await this.beitCnesetModule.deleteOne({ name }).exec();
    return `This action removed #${name} beit cneset`;
  }

  async removeAll() {
    await this.beitCnesetModule.deleteMany();
    return `This action removes all beit cneset`;
  }

  async seedData() {
    const data = initialData;

    await this.beitCnesetModule.insertMany(data);

    return 'הנתונים אותחלו בהצלחה!';
  }
}
