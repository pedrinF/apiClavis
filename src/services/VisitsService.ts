import { Visit } from "@prisma/client";
import { prisma } from "../config/prisma"
import { VisitRequestDTO, VisitResponseDTO } from "../models/visit";

export class VisitService {

    async create(visitDTO: VisitRequestDTO) {
        const createdVisit: Visit = await prisma.visit.create({
          data: {
            nameVisitor: visitDTO.nameVisitor
          }
        });
    
        return new VisitResponseDTO(createdVisit);
    }

    async getAll() {
        const visits: Visit[] = await prisma.visit.findMany();
        const visitsDTO = visits.map(visit => new VisitResponseDTO(visit));
    
        return visitsDTO;
    }

    async findById(id: number) {
        const visit: Visit | null = await prisma.visit.findUnique({
          where: { id : id}
        });
    
        if (!visit) {
          throw new Error(`Visita com id: ${id} não encontrada.`);
        }
    
        return new VisitResponseDTO(visit);
    }
    
    async findByName(nameVisitor: string) {
        const visits: Visit[] = await prisma.visit.findMany({
          where: { nameVisitor }
        });
    
        if (visits.length === 0) {
          throw new Error(`Nenhuma visita encontrada para o visitante: ${nameVisitor}.`);
        }
    
        return visits.map(visit => new VisitResponseDTO(visit));
    }

    async update(id: number, visitDTO: VisitRequestDTO){
        const updatedVisit: Visit = await prisma.visit.update({
          where: { id: id },
          data: {
            nameVisitor: visitDTO.nameVisitor
          }
        });
    
        return new VisitResponseDTO(updatedVisit);
    }
    
    async delete(id: number) {
      const deletedVisit: Visit = await prisma.visit.delete({
        where: { id: id }
      });
  
      return deletedVisit;
    }
}