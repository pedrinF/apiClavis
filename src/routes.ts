import { Router } from 'express'
import { visitController } from './controllers/VisitsController'

export const routes = Router()

routes.post("/visit", visitController.create);
routes.get("/visit", visitController.getAll);
routes.get("/visit/:id", visitController.findById);
routes.get("/visit/name/:name", visitController.findByName);
routes.put("/visit/:id", visitController.update);
routes.delete("/visit/:id", visitController.delete);
