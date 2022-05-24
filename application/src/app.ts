import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'

import authRoute from './routes/authRoutes'
import viewsRoute from './routes/viewsRoutes'

const app = express()

app.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.MONGO,
    }),
    secret: String(process.env.SECRET),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: Number(process.env.TIME_COOKIE)
    }
}))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/', viewsRoute)

export default app