import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Funcionario } from "./Funcionario";

@Entity()
export class Barbearia {

    constructor(nome: string , email: string, senha:string, telefone:string, cep: string, logradouro: string,
         bairro:string, cidade:string, numero:number, estado:string, cnpj:string, telefoneFixo:string, imagem:string){

        this.nome = nome;
        this.email = email;
        this.senha = senha; 
        this.telefone = telefone;
        this.cep = cep;
        this.logradouro = logradouro;
        this.bairro = bairro;
        this.cidade = cidade;
        this.numero = numero;
        this.estado = estado;
        this.cnpj = cnpj;
        this.telefoneFixo = telefoneFixo;
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
    telefone:string;

    @Column()
    cep: string;

    @Column()
    logradouro: string;

    @Column()
    bairro: string;

    @Column()
    cidade: string;

    @Column()
    numero: number; 

    @Column()
    estado: string;

    @Column()
    cnpj : string;

    @Column()
    telefoneFixo : string;

    @Column()
    imagem : string;

    @OneToMany(() => Funcionario, funcionario => funcionario.barbearia)
    funcionarios : Funcionario[];

    

}