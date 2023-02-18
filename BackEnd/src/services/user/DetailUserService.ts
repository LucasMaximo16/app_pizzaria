import jwt from 'jsonwebtoken'
import { DetailUserRepository } from '../../Repository/User/detailUserRepository';


export class DetailUserService {
    async execute(token: string | undefined) {

        if (!token) {
            throw new Error("INVALID TOKEN")
        }

        const decoded: any = jwt.verify(token, String(process.env.TOKEN_KEY));

        const detailUserRepository = new DetailUserRepository()

        const result = await detailUserRepository.getDataUser(decoded.id)

        if (result.data.lenght === 0)
            throw new Error('User not exists')

        return result

    }
}