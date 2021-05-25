import {Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne} from "typeorm";
import { Barbearia } from "./Barbearia";

@Entity()
export class Funcionario {

    constructor( nome: string , horarioInicial: string, horarioFinal: string, telefone:string, barbearia: Barbearia){
        this.nome = nome;
        this.telefone = telefone;
        this.horarioInicial = horarioInicial;
        this.horarioFinal = horarioFinal;
        this.barbearia = barbearia;
        
    }

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    horarioInicial:string;

    @Column()
    horarioFinal:string;

    @Column()
    telefone:string;

    @ManyToOne(() => Barbearia)
    barbearia : Barbearia;

}