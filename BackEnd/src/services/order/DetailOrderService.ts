import { IOrderId, OrderRepository } from './../../Repository/Order/OrderRepository';
export class DetailOrderService {

    async execute(id_order: string) {

        const orderRepository = new OrderRepository
        const result = orderRepository.detailOrder(id_order)

        return result
    }
}