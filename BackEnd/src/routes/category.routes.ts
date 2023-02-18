import { auth } from './../Middlewares/auth';
import { Request, Response, Router } from "express";
import { createCategoryController, getAllCategoryController } from '../Controller/Category';

const categoryRoutes = Router()

categoryRoutes.post('/', auth, (request: Request, response: Response) => {
    return createCategoryController.handle(request, response)
})

categoryRoutes.get('/', auth, (request: Request, response: Response) => {
    return getAllCategoryController.handle(request, response)
})


export { categoryRoutes }