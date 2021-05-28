import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomsService {
  /*
  create(createRoomDto: CreateRoomDto) {
    return 'This action adds a new room';
  }
   */

  findAll(): Room[] {
    return [];
  }

  findOne(id: string): Room {
    return {
      id,
      name: 'Ленинград',
      floor: 2,
      capacity: 10,
      hasConference: true,
      coordinates: {
        lx: 1,
        ly: 0,
        rx: 10,
        ry: 11,
      },
    };
  }

  /*
  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
   */
}
