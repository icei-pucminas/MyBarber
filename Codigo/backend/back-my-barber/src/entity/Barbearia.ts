import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Barbearia {

    constructor(nome: string , email: string, senha:string, telefone:string, cep: string, logradouro: string,
         bairro:string, cidade:string, numero:number, estado:string, cnpj:string, telefoneFixo:string){

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


     CidadeToLowerCase(){
        this.cidade = this.cidade.toLowerCase();
    }

    

}