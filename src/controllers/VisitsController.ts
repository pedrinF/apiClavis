import { Request, Response } from "express"
import { VisitService } from "../services/VisitsService"
import { VisitRequestDTO } from "../models/visit"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"

const visitService = new VisitService()

export const visitController = {

    async create(req: Request, res: Response) {
        const reqVisit: VisitRequestDTO = req.body;
    
        try {
          const visitDTO = await visitService.create(reqVisit);
          return res.json(visitDTO);
        } catch (e: any) {
          if (e instanceof PrismaClientKnownRequestError) {
            return res.status(400).json({
              message: 'Erro ao criar visita.'
            });
          } else {
            return res.status(500).json({ message: e.message });
          }
        }
    },

    async getAll(req: Request, res: Response) {
        try {
          const visitsDTO = await visitService.getAll();
          return res.json(visitsDTO);
        } catch (e: any) {
          return res.status(500).json({ message: e.message });
        }
    },

    async findById(req: Request, res: Response) {
        const id = req.params.id;
    
        try {
          const visitDTO = await visitService.findById(Number(id));
          return res.json(visitDTO);
        } catch (e: any) {
          if (e instanceof PrismaClientKnownRequestError) {
            return res.status(404).json({ message: `Visita com id: ${id} não encontrada.` });
          } else {
            return res.status(500).json({ message: e.message });
          }
        }
    },

    async findByName(req: Request, res: Response) {
        const nameVisitor: string = req.params.name;
    
        try {
          const visitsDTO = await visitService.findByName(nameVisitor);
          return res.json(visitsDTO);
        } catch (e: any) {
          if (e instanceof PrismaClientKnownRequestError) {
            return res.status(404).json({ message: `Nenhuma visita encontrada para o visitante: ${nameVisitor}.` });
          } else {
            return res.status(500).json({ message: e.message });
          }
        }
    },

    async update(req: Request, res: Response) {
        const id = req.params.id;
        const reqVisit: VisitRequestDTO = req.body;
    
        try {
          const visitDTO = await visitService.update(Number(id), reqVisit);
          return res.json(visitDTO);
        } catch (e: any) {
          if (e instanceof PrismaClientKnownRequestError) {
            return res.status(404).json({
              message: `Visita com id: ${id} não encontrada.`
            });
          } else {
            return res.status(500).json({ message: e.message });
          }
        }
    },

    async delete(req: Request, res: Response) {
        const id = req.params.id;
    
        try {
          const visitDTO = await visitService.delete(Number(id));
          return res.json(visitDTO);
        } catch (e: any) {
          if (e instanceof PrismaClientKnownRequestError) {
            return res.status(404).json({
              message: `Visita com id: ${id} não encontrada.`
            });
          } else {
            return res.status(500).json({ message: e.message });
          }
        }
      }
}