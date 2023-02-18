import { CreateProductDTO } from './../../DTO/ProductDTO/CreateProductDTO';
import { Request, Response } from "express";
import { CreateProductService } from '../../services/product/createProductService';

export class CreateProductController {
    async handle(request: Request, response: Response) {
        const data: CreateProductDTO = request.body

        if (!request.file) {
            throw new Error("Fail Upload Image")
        }

        const { filename: banner } = request.file

        try {

            const createProductService = new CreateProductService()
            const result = await createProductService.execute({ ...data, banner: banner })

            return response.status(result.status).json(result.data)
        } catch (error) {
            const messageError = (error as Error).message
            response.status(400).json(messageError)

        }
    }
}