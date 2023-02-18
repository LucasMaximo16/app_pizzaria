import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

export class DetailUserController {
    async handle(request: Request, response: Response) {

        const token = request.header('Authorization')?.replace('Bearer ', '');

        try {
            const detailUserService = new DetailUserService
            const result = await detailUserService.execute(token)

            return response.status(result.status).json(result.data)
        } catch (error) {
            const messgeError = (error as Error).message
            return response.status(400).json(messgeError)
        }
    }
}