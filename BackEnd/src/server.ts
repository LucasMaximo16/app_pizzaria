import express from "express";
import { routes } from "./routes";

const cors = require('cors')
const app = express()

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(express.json())

app.use(cors(corsOptions))

app.use(routes)

app.listen(3333)