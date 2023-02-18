import { DetailOrderService } from './../../services/order/DetailOrderService';
import { Request, Response } from "express";

export class DetailOrderController {
    async handle(request: Request, response: Response) {

        const { id_order } = request.params

        try {
            const detailOrderService = new DetailOrderService
            const result = await detailOrderService.execute(id_order)

            return response.status(result.status).json(result.data)

        } catch (error) {
            const messageError = (error as Error).message
            return response.status(400).json(messageError)
        }
    }
}