import { Request, Response } from "express";
import { GetAllOrdersService } from "../../services/order/GetAllOrdersService";

export class GetAllOrdersController {
    async handle(request: Request, response: Response) {

        try {
            const getAllOrdersService = new GetAllOrdersService
            const result = await getAllOrdersService.execute()

            return response.status(result.status).json(result.data)
        } catch (error) {
            const messageError = (error as Error).message
            return response.status(400).json(messageError)
        }
    }
}