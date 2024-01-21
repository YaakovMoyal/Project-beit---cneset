import { Module } from '@nestjs/common';
import { BeitCnesetService } from './beit-cneset.service';
import { BeitCnesetController } from './beit-cneset.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { beitCnesetSchema } from 'src/mongoose/beitCnesetSchema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'beit-Cneset', schema: beitCnesetSchema },
    ]),
  ],

  controllers: [BeitCnesetController],
  providers: [BeitCnesetService],
})
export class BeitCnesetModule {}
