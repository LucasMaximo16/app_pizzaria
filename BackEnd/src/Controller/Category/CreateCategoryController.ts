import { Request, Response } from "express";
import { ICategoryDTO } from "../../DTO/CategoryDTO/ICategoryDTO";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

export class CreateCategoryController {
    async handle(request: Request, response: Response) {

        const data: ICategoryDTO = request.body

        try {
            const createCategoryService = new CreateCategoryService
            const result = await createCategoryService.execute(data)

            return response.status(result.status).json(result.data)

        } catch (error) {
            const messageError = (error as Error).message
            response.status(400).json(messageError)
        }
    }
}