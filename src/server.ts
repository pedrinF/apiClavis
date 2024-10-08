import express from 'express'
import { routes } from './routes'


const app = express()

app.use(express.json())

app.use(routes)


app.listen(5432, () => {
    console.log("server running on port 5432")
})