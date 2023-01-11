import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Token{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 255 })
    hash: string;
}





