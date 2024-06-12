import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  } else if (req.method === 'POST') {
    const { nome_usuario, senha_usuario } = req.body;
    const novoUsuario = await prisma.usuario.create({
      data: { nome_usuario, senha_usuario },
    });
    res.json(novoUsuario);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
