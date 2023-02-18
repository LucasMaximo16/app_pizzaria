import { GetAllCategoriesService } from './../../services/category/GetAllCategoryService';
import { Request, Response } from "express";

export class GetAllCategoryController {
    async handle(request: Request, response: Response) {
        try {
            const getlAllCategoriesService = new GetAllCategoriesService
            const result = await getlAllCategoriesService.execute()

            return response.status(result.status).json(result.data)
        } catch (error) {
            const messageError = (error as Error).message
            response.status(400).json(messageError)
        }
    }
}