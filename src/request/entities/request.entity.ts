import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  BaseEntity,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
@Entity()
export class Request extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  service: string;

  @Column({ nullable: false, type: 'varchar', length: 500 })
  description: string;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => User, (userId: User) => userId.requests)
  public user: User;
}
