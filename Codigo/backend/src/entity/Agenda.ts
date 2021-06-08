import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Cliente } from "./Cliente";
import { Funcionario } from "./Funcionario";

@Entity()
export class Agenda {
    constructor(data: Date, horario: string, cliente: Cliente, barbeiro: Funcionario) {
        this.data = data;
        this.horario = horario;
        this.cliente = cliente;
        this.barbeiro = barbeiro;

    }
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    data: Date;

    @Column()
    horario: string;

    @ManyToOne(() => Cliente)
    cliente: Cliente;

    @ManyToOne(() => Funcionario)
    barbeiro: Funcionario;
}