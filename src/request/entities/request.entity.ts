import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne  } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Request {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    userId: number;

    @Column({ nullable: false })
    architectId: number;

    @Column({ nullable: false, type: 'varchar', length: 200 })
    service: string;

    @Column({ nullable: false, type: 'varchar', length: 500 })
    description: string;

    @Column({ nullable: false, default: 'Pendente' })
    status: string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @ManyToOne(() => User, user => user.requestId)
    user: User
}
