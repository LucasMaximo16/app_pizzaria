import { OrderRepository } from './../../Repository/Order/OrderRepository';
export class DeleteOrderService {
    async execute(id: string) {

        const orderRepository = new OrderRepository
        const verifyOrder = await orderRepository.getById(id)

        if (!verifyOrder) {
            throw new Error("Invalid ID")
        }

        const result = await orderRepository.delete(id)

        return result
    }
}