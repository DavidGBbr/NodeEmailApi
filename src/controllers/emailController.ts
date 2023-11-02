import { Request, Response } from "express";
import nodemailer from "nodemailer";

export const contato = async (req: Request, res: Response) => {
  //Passo 1: Configurar o transporter

  let transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b974e0c7cee1d7",
      pass: "26d88d856d7626",
    },
  });

  //Passo 2: Configurar a mensagem

  let { from, subject, email } = req.body;

  let message = {
    from: "nao-responda@b7web.com.br",
    to: "suporte@b7web.com.br",
    subject,
    replyTo: from,
    html: email,
    text: email,
  };

  //Passo 3: Enviar a mensagem

  let info = await transport.sendMail(message);
  console.log("INFO", info);

  res.json({ success: true });
};
