import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  role: string;

  @Column()
  is_active: number;

  @Column()
  create_at: Date;

  @Column()
  updated_at: Date;
}
