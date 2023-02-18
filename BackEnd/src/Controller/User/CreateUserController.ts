import { IUserDTO } from './../../DTO/UserDTO/IUserDTO';
import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

export class CreateUserController {
    async handle(request: Request, response: Response) {

        const data: IUserDTO = request.body

        try {
            const createUserService = new CreateUserService()
            const result = await createUserService.execute(data)
            return response.status(result.status).json(result.data)
        }
        catch (error) {
            const messageError = (error as Error).message
            return response.status(400).json(messageError)
        }
    }
}