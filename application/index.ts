import 'dotenv/config'
import app from './src/app'

app.set('views', __dirname + '/public/views')
app.set('view engine', 'ejs')

declare module 'express-session' {
    interface SessionData {
        nombreUsuario:string
    }
}

const PORT = process.env.PORT
app
    .listen(PORT, () => console.log(`http://localhost:${PORT}`))
    .on('error', err => console.log(err))
    