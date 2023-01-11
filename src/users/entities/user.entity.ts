import { Entity, Column, PrimaryGeneratedColumn,   Unique, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { Request } from 'src/request/entities/request.entity'; 
@Entity()
@Unique(['email'])
export class User{
    save() {
        throw new Error('Method not implemented.');
    }
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

    requestId: number;

    @OneToMany(() => Request, request => request.userId)
    request: Request[];

    @OneToMany(() => Request, request => request.architectId)
    requested: Request[];
}





