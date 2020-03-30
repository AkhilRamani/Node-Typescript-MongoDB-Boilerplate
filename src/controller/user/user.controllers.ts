import {Request, Response} from 'express'
import {UserRepository} from '../../repository'
import { UserModel } from '../../schema'
import { getStatusCode } from '../../common/utils.common'

const registerUser = async (req: Request, res: Response) => {
    try{
        const userData: UserModel = req.body
        const userRepo = new UserRepository()

        const data = await userRepo.save(userData)
        res.json(data)
    }
    catch(e){
        res.status(getStatusCode(e.code)).send({message: e.message})
    }
}

const getUser = async (req: Request, res: Response) => {
    try{
        const userId: string = req.params.id
        const userRepo = new UserRepository()

        const user = await userRepo.get(userId)
        res.json(user)
    }
    catch(e){
        console.log(e);
        res.status(getStatusCode(e.code)).send({message: e.message})
    }
}

export {
    registerUser,
    getUser
}