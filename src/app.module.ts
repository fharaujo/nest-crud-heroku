import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot();
const dbUse = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${dbUse}:${dbPassword}@cluster0.ccw2u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
