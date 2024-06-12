import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const acessos = await prisma.acesso.findMany();
    res.json(acessos);
  } else if (req.method === 'POST') {
    const { data_acesso, hora_acesso, pessoas_acesso, local_acesso } = req.body;
    const novoAcesso = await prisma.acesso.create({
      data: { data_acesso, hora_acesso, pessoas_acesso, local_acesso },
    });
    res.json(novoAcesso);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
