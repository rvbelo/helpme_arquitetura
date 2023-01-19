import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { Request } from 'src/request/entities/request.entity';

@Entity()
@Unique(['email'])
export class User{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  email: string;

  @Column({ nullable: false, type: 'varchar', length: 11 })
  phone: string;

  @Column({ nullable: false, type: 'varchar', length: 1 })
  gender: string;

  @Column({ length: 8 })
  birthdate: string;

  @Column({ nullable: false, type: 'varchar', length: 11 })
  cpf: string;

  @Column({ nullable: false, type: 'varchar', length: 20 })
  role: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false, default: true })
  status: boolean;

  @Column({ nullable: true, type: 'varchar', length: 64 })
  confirmationToken: string;

  @Column({ nullable: true, type: 'varchar', length: 64 })
  recoverToken: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Request, (request: Request) => request.user)
  public requests: Request[]

  @OneToMany(() => Request, (request: Request) => request.user)
  public works: Request[]
}
