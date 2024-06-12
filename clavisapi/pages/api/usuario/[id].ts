import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { nome_usuario, senha_usuario } = req.body;
    const usuarioAtualizado = await prisma.usuario.update({
      where: { id_usuario: Number(id) },
      data: { nome_usuario, senha_usuario },
    });
    res.json(usuarioAtualizado);
  } else if (req.method === 'DELETE') {
    await prisma.usuario.delete({
      where: { id_usuario: Number(id) },
    });
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
