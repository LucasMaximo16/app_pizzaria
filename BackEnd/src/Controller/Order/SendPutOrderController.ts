import { Request, Response } from "express"
import { SendPutOrderService } from "../../services/order/SendPutOrderService"

export class SendOrderPutController {
    async handle(request: Request, response: Response) {
        const id_order = request.body

        try {
            const sendOrderPutService = new SendPutOrderService
            const result = await sendOrderPutService.execute(id_order)

            return response.status(result.status).json(result.data)
        } catch (error) {
            const messageError = (error as Error).message
            return response.status(400).json(messageError)
        }
    }
}