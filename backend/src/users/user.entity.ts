import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')  // This defines the table name as 'users'
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Add more fields as needed
}
