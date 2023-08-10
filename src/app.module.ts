import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    ProductModule,
    CategoryModule,
    MongooseModule.forRoot('mongodb://localhost:27017/seeding'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
