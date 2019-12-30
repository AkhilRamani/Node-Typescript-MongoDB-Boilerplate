import {Request, Response} from 'express'
import {UserRepository} from '../../Repository'

const testRoute = (req: Request, res: Response) => {
    res.send('Node app is running flawlessly')
}

const registerUser = async (req: Request, res: Response) => {
    try{
        const userRepo = new UserRepository()
        const data = await userRepo.saveUser(req.body)
        res.send(data)
    }
    catch(e){
        res.status(500).send()
    }
}

export {
    testRoute,
    registerUser
}