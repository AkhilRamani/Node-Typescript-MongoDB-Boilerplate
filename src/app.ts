import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import {Routes} from './routes'

class App{

    public app: express.Application

    constructor(){
        this.app = express()
        this.config()
        new Routes(this.app)
    }

    private config(): void{
        dotenv.config()
        this.app.use(cors())
        this.app.use(bodyParser.json())
        this.mongoSetup()
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise
        mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
            .then(() => console.log('Connected to DB'))
            .catch(e => console.log('failed to connect DB', e))
    }
}

export const app = new App().app