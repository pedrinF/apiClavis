import { Visit } from "@prisma/client"

export type VisitRequestDTO = {
    nameVisitor: string
}

export class VisitResponseDTO {
    id: number
    nameVisitor: string
    createdAt: Date

    constructor(visit: Visit) {
        this.id = visit.id
        this.nameVisitor = visit.nameVisitor
        this.createdAt = visit.createdAt
    }
}