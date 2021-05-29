import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
/*
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
 */
import { Room } from './entities/room.entity';
import { RoomDb } from './entities/roomDb.entity';

const convert = ({ rx, ry, lx, ly, id, ...room }: RoomDb): Room => {
  return {
    id: String(id),
    ...room,
    coordinates: {
      rx,
      ry,
      lx,
      ly,
    },
  };
};

@Injectable()
export class RoomsService {
  /*
  create(createRoomDto: CreateRoomDto) {
    return 'This action adds a new room';
  }
   */
  constructor(
    @InjectRepository(RoomDb)
    private roomsRepository: Repository<RoomDb>,
  ) {}

  findAll(): Promise<Room[]> {
    return this.roomsRepository
      .find()
      .then((result) => result.map((roomDb) => convert(roomDb)));
  }

  findOne(id: string): Promise<Room> {
    return this.roomsRepository.findOne(Number(id)).then((roomDb) => {
      if (roomDb === undefined) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Room not found',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      return convert(roomDb);
    });
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
