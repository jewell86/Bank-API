const accounts = require(../../data/accounts.data.json)
const model = require(../models/accounts)

function getAll(req, res, next) {
    const limit = req.query.limit
    const data = model.getAll(limit)
    if (!data) return next({ status: 404, message: `No accounts found`})
    res.status(200).send({ data })
}

function getOne(req, res, next){
    const id = req.params.id
    const data = model.getOne(id)
    if (!data) return next({ status: 404, message: `Account ID ${id} not found`})
    res.status(200).send({ data })
}

function create(req, res, next){
    const name = req.body.name
    const bankName = req.body.bankName
    const description = req.body.description
    const transactions = req.body.transactions
    const data = model.create(name, bankName, description, transactions)
    if(!data) return next({ status: 400, message: `Account failed to create`})
    res.status(200).send({ data })
}


function update(req, res, next){
    const id = req.params.id
    const name = req.body.name
    const bankName = req.body.bankName
    const description = req.body.description
    const transactions = req.body.transactions
    const data = model.update(id, name, bankName, description, transactions)
    if (!data) return next({ status: 404, message: `Account ID ${id} not found`})
    res.status(200).send({ data })
}

function deleteOne(req, res, next){
    const id = req.params.id
    const data = return model.deleteOne(id)
    if (!data) return next({ status: 404, message: `Account ID ${id} not found`})
    res.status(200).send({ data })
}




module.exports = { getAll, getOne, create, update, deleteOne }