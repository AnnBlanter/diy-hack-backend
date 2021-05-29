import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RoomDb {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  floor: number;

  @Column()
  capacity: number;

  @Column()
  hasConference: boolean;

  @Column()
  lx: number;

  @Column()
  ly: number;

  @Column()
  rx: number;

  @Column()
  ry: number;
 
  @Column()
  lxperc: number;

  @Column()
  lyperc: number;

  @Column()
  rxperc: number;

  @Column()
  ryperc: number;
  
  @Column()
  type: string;
  
   @Column()
  isFixed: boolean;
}
