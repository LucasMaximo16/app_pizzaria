import { LoginUserService } from './../../services/user/LoginUserService';
import { Request, Response } from "express";
import { ILoginUserDTO } from "../../DTO/UserDTO/ILoginUserDTO";

export class LoginUserController {
    async handle(request: Request, response: Response) {

        const data: ILoginUserDTO = request.body

        const loginUserService = new LoginUserService()

        try {
            const result = await loginUserService.execute(data)
            return response.status(result.status).json(result.data.token)
        }

        catch (error) {
            const messageError = (error as Error).message
            return response.status(400).json(messageError)
        }

    }
}