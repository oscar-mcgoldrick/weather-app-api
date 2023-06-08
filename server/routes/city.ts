import express from 'express'
import request from 'superagent'

import path from 'path'
import dotenv from 'dotenv'
const envPath = path.join(__dirname, '../../.env')
dotenv.config({ path: envPath })

const router = express.Router()

// GET /api/v1/welcome/
router.get('/', (req, res) => {
  console.log(req.body)
  request.get(`https://api.api-ninjas.com/v1/city?name=stockholm`).set('X-Api-Key', 'zaByrX4AXm8PRR6OcKU2FDzdyBoNUONkpT94ljNE')
  .then(res => {
    return res.body})
})

export default router
