import { OrderRepository } from './../../Repository/Order/OrderRepository';
export class GetAllOrdersService {
    async execute() {
        const orderRepoistory = new OrderRepository

        const result = await orderRepoistory.getAllOrders()

        return result
    }
}