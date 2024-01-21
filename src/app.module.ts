import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BeitCnesetModule } from './beit-cneset/beit-cneset.module';
import * as redisStore from 'cache-manager-redis-store';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://kobi856m:208309856@cluster0.s44uek9.mongodb.net/nestjs-users-projectBeitCneset?retryWrites=true&w=majority`,
    ),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),

    UsersModule,
    BeitCnesetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
