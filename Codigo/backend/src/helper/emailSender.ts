import * as nodemailer from 'nodemailer';
import {smtp} from '../config/smtp';

const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    auth: {
        user: smtp.user,
        pass: smtp.pass,
    },   
    secure: false,
    tls: {
        rejectUnauthorized: false
    }
});

export const emailSender = async (cliente, agendamento, barbearia) => {
    const mailSent = await transporter.sendMail({
        text: `Agendamento realizado no nome de ${agendamento.cliente.nome} as ${agendamento.horario} no dia ${agendamento.data}, com o funcionário ${agendamento.barbeiro.nome}`,
        subject: "Agendamento",
        from: `MyBarber <${smtp.user}>`,
        to: [`joaovenus@gmail.com`],
    })
}