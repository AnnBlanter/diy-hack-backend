import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomDb as Room } from './entities/roomDb.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  controllers: [RoomsController],
  providers: [RoomsService],
})
export class RoomsModule {}
