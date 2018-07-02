const models = require('../models/transactions.js')

function getAll(req, res, next) {
    const id = req.params.id
    const limit = req.query.limit
    const data = models.getAll(id)
    if (!data) return next ({ status: 404, message: `No accounts found` })
    res.status(200).json({ data })
}

function getOne(req, res, next) {
    const id = req.params.id
    const transactionId = req.params.transactionId
    const data = models.getOne(id, transactionId)
    if (!data) return next({ status: 404, message: `Account!!! ID ${id} not found` })
    res.status(200).json({ data })
}

function create(req, res, next) {
    const id = req.params.id
    const { title, amount, pending } = req.body
    if (!title|| !amount || !pending ) return next ({ status: 400, message: `All fields required in proper format`})
    const data = models.create(id, title, amount, pending)
    res.status(200).json({ data })
}

function update(req, res, next) {
    const id = req.params.id
    const transactionId = req.params.transactionId
    const { title, amount, pending } = req.body
    const data = models.update(id, transactionId, title, amount, pending)
    if (!data) return next ({ status: 400, message: `Account ID ${id} not found`})
    res.status(200).json({ data })
}

function deleteOne(req, res, next){
    const id = req.params.id
    const transactionId = req.params.transactionId
    const data = models.deleteOne(id, transactionId)
    if (!data) return next({ status: 404, message: `Account ID ${id} not found`})
    res.status(200).send({ data })
}

module.exports = { getAll, getOne, create, update, deleteOne }