import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne } from "typeorm";
import { Barbearia } from "./Barbearia";

const DEFAULT_IMG = "https://image.freepik.com/fotos-gratis/homem-confiante-barbeiro-profissional-com-uma-tesoura-cabeleireiro-elegante-na-barbearia-publicidade-e-barbearia-conceito_167187-244.jpg"

@Entity()
export class Funcionario {

    constructor(nome: string, horarioInicial: string, horarioFinal: string, telefone: string, barbearia: Barbearia, imagem: string) {
        this.nome = nome;
        this.telefone = telefone;
        this.horarioInicial = horarioInicial;
        this.horarioFinal = horarioFinal;
        this.barbearia = barbearia;
        this.imagem = imagem;

    }

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    horarioInicial: string;

    @Column()
    horarioFinal: string;

    @Column()
    telefone: string;

    @Column({ default: DEFAULT_IMG, nullable: true })
    imagem: string;

    @ManyToOne(() => Barbearia)
    barbearia: Barbearia;

}