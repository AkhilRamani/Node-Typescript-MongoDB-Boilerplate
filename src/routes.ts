import {Application} from 'express'
import {UserController} from './Controllers'

export class Routes{

    public routes(app: Application): void{
        
        app.get('/', UserController.testRoute)
        app.post('/signup', UserController.registerUser)
        
    }
}