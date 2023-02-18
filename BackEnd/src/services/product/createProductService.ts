import { CreateProductDTO } from "../../DTO/ProductDTO/CreateProductDTO";
import { CreateProductRepository } from "../../Repository/Product/CreateProductRepository";

export class CreateProductService {
    async execute(data: CreateProductDTO) {

        const createProductRepository = new CreateProductRepository()

        const result = await createProductRepository.create(data)

        return result
    }
}