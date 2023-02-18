import { ItemDTO } from "../../DTO/ItemDTO/CreateItemDTO";
import { ItemRepository } from "../../Repository/Item/ItemRepository";

export class CreateItemService {
    async execute(data: ItemDTO) {

        const itemRepository = new ItemRepository

        const result = await itemRepository.create(data)

        return result
    }
}