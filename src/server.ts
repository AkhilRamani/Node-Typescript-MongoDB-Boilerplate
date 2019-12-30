import {app} from './app'

const startServer = () => {
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`))
}

startServer()