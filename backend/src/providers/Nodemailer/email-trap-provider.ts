type IAddress = {
  email: string;
  name: string;
};

export type IMessage = {
  to: IAddress;
  from: IAddress;
  subject: string;
  body: string;
};

export interface IEmailProvider {
  sendEmail(message: IMessage): Promise<IMessage>;
};