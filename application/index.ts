import 'dotenv/config'
import { app } from './src/app'

const PORT = process.env.PORT
app
    .listen(PORT, () => console.log(`http://localhost:${PORT}`))
    .on('error', err => console.log(err))
    