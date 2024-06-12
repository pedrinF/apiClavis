import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const pessoas = await prisma.pessoa.findMany();
    res.json(pessoas);
  } else if (req.method === 'POST') {
    const { nome_pessoa, cpf_pessoa, rg_pessoa } = req.body;
    const novaPessoa = await prisma.pessoa.create({
      data: { nome_pessoa, cpf_pessoa, rg_pessoa },
    });
    res.json(novaPessoa);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
