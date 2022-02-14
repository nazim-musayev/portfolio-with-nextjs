import type { NextApiRequest, NextApiResponse } from 'next';
import { FormInputs as RequestBody } from 'interfaces';
import mail from '@sendgrid/mail';

mail.setApiKey(process.env.SEND_GRID as string);

type Status = {
  status: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Status>) {
  const body: RequestBody = req.body;

  const message = `
    Name: ${body.name}\r\n 
    Email: ${body.email}\r\n 
    Subject: ${body.subject}\r\n 
    Message: ${body.message}
  `;

  const data = {
    to: "nazimmusayev02@gmail.com",
    from: "nazim.musa.555@gmail.com",
    subject: "New email from portfolio website",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  await mail.send(data);

  res.status(200).json({ status: 'ok' });
};
