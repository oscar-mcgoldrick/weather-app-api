import { join } from 'node:path'
import express from 'express'

import city from './routes/city'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))

server.use('/api/v1/city', city)

export default server
