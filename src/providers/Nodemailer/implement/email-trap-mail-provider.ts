import { IEmailProvider, IMessage } from "../email-trap-provider";
import nodemailer from "nodemailer";

class EmailTrapMailProvider implements IEmailProvider {
  async sendEmail(message: IMessage): Promise<IMessage> {
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      secure: false,
      auth: {
        user: "944906f28912c0",
        pass: "35065fcbecb150",
      },
    });

    await transporter.sendMail({
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      subject: message.subject,
      text: message.body,
    });

    return message;
  }
} export { EmailTrapMailProvider };