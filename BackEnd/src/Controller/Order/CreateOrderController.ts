import { Request, Response } from "express";
import { CreateOrderDTO } from "../../DTO/OrderDTO/CreateOrderDTO";
import { CreateOrderService } from "../../services/order/CreateOrderService";

export class CreateOrderController {
    async handle(request: Request, response: Response) {
        const data: CreateOrderDTO = request.body

        try {
            const createOrderService = new CreateOrderService()
            const result = await createOrderService.execute(data)

            return response.status(result.status).json(result.data)

        } catch (error) {
            const messageError = (error as Error).message
            return response.status(400).json(messageError)
        }
    }
}