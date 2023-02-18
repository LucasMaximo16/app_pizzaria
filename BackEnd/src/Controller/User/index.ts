import { DetailUserController } from './DetailUserController';
import { LoginUserController } from './LoginUserController';
import { CreateUserController } from './CreateUserController';

const createUserController = new CreateUserController()
const loginUserController = new LoginUserController()
const detailUserController = new DetailUserController()

export { createUserController, loginUserController, detailUserController }