import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { data_acesso, hora_acesso, pessoas_acesso, local_acesso } = req.body;
    const acessoAtualizado = await prisma.acesso.update({
      where: { id_acesso: Number(id) },
      data: { data_acesso, hora_acesso, pessoas_acesso, local_acesso },
    });
    res.json(acessoAtualizado);
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
