import { OrderRepository } from './../../Repository/Order/OrderRepository';
import { CreateOrderDTO } from "../../DTO/OrderDTO/CreateOrderDTO";

export class CreateOrderService {
    async execute(data: CreateOrderDTO) {

        const orderRepository = new OrderRepository()

        if (!data.table) {
            throw new Error("Número da mesa deve ser informado")
        }

        const result = orderRepository.create(data)

        return result
    }
}