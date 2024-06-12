import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { nome_pessoa, cpf_pessoa, rg_pessoa } = req.body;
    const pessoaAtualizada = await prisma.pessoa.update({
      where: { id_pessoa: Number(id) },
      data: { nome_pessoa, cpf_pessoa, rg_pessoa },
    });
    res.json(pessoaAtualizada);
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
