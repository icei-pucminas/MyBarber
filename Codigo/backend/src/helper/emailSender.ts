import * as nodemailer from 'nodemailer';
import {smtp} from '../config/smtp';
import { Agenda } from '../entity/Agenda';
import { Barbearia } from '../entity/Barbearia';
import { Cliente } from '../entity/Cliente';

const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    auth: {
      user: smtp.user,
      pass: smtp.pass
    }
});

export const emailSender = async (cliente, agenda, barbearia) => {
    const mailSent = await transporter.sendMail({
        from: `MyBarber <mybarbernoreply@gmail.com>`,        
        to: [`${cliente.email},${barbearia.email}`],
        subject: "Agendamento",        
        html: `<h2>Agendamento Confirmado</h2><br>
        <p>Agendamento confirmado as ${agenda.horario} de ${new Date(agenda.data).toLocaleDateString()}.</p><br>
        <p>Cliente: ${cliente.nome}</p><br>
        <p>Barbeiro: ${agenda.barbeiro.nome}</p><br> 
        <p>Barbearia: ${barbearia.nome}</p><br>`,
    }).then (message => {
        console.log(message);
    }).catch(error => {
        console.log(error);
    })
}

export const emailCancelaSender = async (agenda) => {
    const mailSent = await transporter.sendMail({
        from: `MyBarber <mybarbernoreply@gmail.com>`,        
        to: [`${agenda.cliente.email},${agenda.barbeiro.barbearia.email}`],
        subject: "Agendamento",        
        html: `<h2>Agendamento Cancelado</h2><br>
        <p>Agendamento cancelado : ${agenda.horario} de ${new Date(agenda.data).toLocaleDateString()}.</p><br>
        <p>Cliente: ${agenda.cliente.nome}</p><br>
        <p>Barbeiro: ${agenda.barbeiro.nome}</p><br> 
        <p>Barbearia: ${agenda.barbeiro.barbearia.nome}</p><br>`,
    }).then (message => {
        console.log(message);
    }).catch(error => {
        console.log(error);
    })
}

