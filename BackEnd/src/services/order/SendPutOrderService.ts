import { OrderRepository } from './../../Repository/Order/OrderRepository';

export interface OrderId {
    id: string
}

export class SendPutOrderService {
    async execute(id_order: OrderId) {

        const orderRepository = new OrderRepository

        const result = await orderRepository.sendOrder(id_order.id)

        return result
    }
}