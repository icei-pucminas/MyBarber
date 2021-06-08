import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Agenda } from "./Agenda";

const DEFAULT_IMG = "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png";

@Entity()
export class Cliente {

    constructor(nome: string, email: string, senha: string, telefone: string, imagem: string) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.telefone = telefone;
        this.imagem = imagem;
    }

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column()
    telefone: string;

    @Column({ default: DEFAULT_IMG, nullable: true })
    imagem: string;

    @OneToMany(() => Agenda, agenda => agenda.cliente)
    agendas: Agenda[];

}


