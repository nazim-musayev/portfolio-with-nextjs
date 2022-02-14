import type { NextApiRequest, NextApiResponse } from 'next';
import { FormInputs as RequestBody } from 'interfaces';

type Status = {
  status: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Status>) {
  const body: RequestBody = req.body;
  console.log(body);
  const message = `
  Name: ${body.name}\r\n 
  Message: ${body.message}
  `;
  console.log(message);

  res.status(200).json({ status: 'ok' });
};
