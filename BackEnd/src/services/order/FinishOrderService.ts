import { OrderRepository } from "../../Repository/Order/OrderRepository";

export class FinishOrderService {
    async execute(id_order: string) {

        const orderRepository = new OrderRepository
        const result = orderRepository.finishOrder(id_order)

        return result
    }
}