import {Application, Router} from 'express'
import {userController} from './controller'

export class Routes{

    private testRouter = Router()
    private userRouter = Router()

    constructor(app: Application){
        this.initRoutes(app)
        this.testRoutes(this.testRouter)
        this.userRoutes(this.userRouter)
    }

    private initRoutes(app: Application){
        //initialize parent router here
        app.use('/v1/test', this.testRouter)
        app.use('/v1/user', this.userRouter)
    }

    private testRoutes(testRouter: Router){
        testRouter.get('/', (req, res) => res.send('Node app is running flawlessly'))
    }

    private userRoutes(userRouter: Router){
        //create saperate functions for each router. like this

        userRouter.post('/save', userController.registerUser)
        userRouter.get('/:id', userController.getUser)
    }
}

/**
end route will be
 
/v1/user/save
/v1/user/:id

*/