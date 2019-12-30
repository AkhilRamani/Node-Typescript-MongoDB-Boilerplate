import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import {config} from 'dotenv'

import {Routes} from './routes'

const app = express()
const routesPrv: Routes = new Routes()

config()
app.use(cors())
app.use(bodyParser.json())
routesPrv.routes(app)

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
    .then(() => console.log('Connected to DB'))
    .catch(e => console.log('failed to connect DB', e))

export { app }