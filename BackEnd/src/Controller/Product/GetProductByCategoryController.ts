import { GetProductByCategoryService } from './../../services/product/getProductyCategoryService';
import { Request, Response } from "express";

export class GetProductByCategoryController {
    async handle(request: Request, response: Response) {
        const { id_category } = request.params

        try {
            const getProductByCategoryService = new GetProductByCategoryService()
            const result = await getProductByCategoryService.execute(id_category)

            return response.status(result.status).json(result.data)
        } catch (error) {
            const messageError = (error as Error).message
            return response.status(400).json(messageError)
        }
    }
}