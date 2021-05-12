import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Cliente {

    constructor( nome: string , email: string, senha:string, telefone:string){
        this.nome = nome;
        this.email = email;
        this.senha = senha; 
        this.telefone = telefone;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column()
    telefone:string;

}


