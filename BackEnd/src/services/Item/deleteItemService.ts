import { ItemRepository } from './../../Repository/Item/ItemRepository';
export class DeleteItemService {
    async execute(id: string) {

        const itemRepository = new ItemRepository

        const result = await itemRepository.delete(id)

        return result
    }
}