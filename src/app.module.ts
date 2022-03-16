import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { \[cat\]Module } from './[cat/]/[cat/].module';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [\[cat\]Module, CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
