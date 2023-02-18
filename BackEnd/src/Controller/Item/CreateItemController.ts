import { Request, Response } from "express";
import { ItemDTO } from "../../DTO/ItemDTO/CreateItemDTO";
import { CreateItemService } from "../../services/Item/createItemService";

export class CreateItemController {
    async handle(request: Request, response: Response) {
        const data: ItemDTO = request.body

        try {
            const createItemService = new CreateItemService
            const result = await createItemService.execute(data)

            return response.status(result.status).json(result.data)

        } catch (error) {
            const messageError = (error as Error).message
            return response.status(400).json(messageError)
        }
    }
}