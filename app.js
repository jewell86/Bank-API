const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors())
const port = 4000 || process.env.PORT

if(process.env.N_ === 'development') {
    app.use(morgan('dev'))
}

const accountsRoutes = require('./src/routes/accounts')
const transactionsRoutes = require('./src/routes/transactios')

app.use('/accounts', accountsRoutes)
app.use('/accounts/:id', accountsRoutes)
app.use('/accounts/:id/transactions', transactionsRoutes)
app.use('/accounts/:id/transactions/:id', transactionsRoutes)






const listener = 

module.exports = app