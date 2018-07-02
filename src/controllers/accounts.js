const models = require('../models/accounts.js')

function getAll(req, res, next) {
    const limit = req.query.limit
    const data = models.getAll(limit)
    if (!data) return next ({ status: 404, message: `No accounts found` })
    res.status(200).json({ data })
}

function getOne(req, res, next) {
    const id = req.params.id
    const data = models.getOne(id)
    if (!data) return next({ status: 404, message: `Account.js ID ${id} not found` })
    res.status(200).json({ data })
}

function create(req, res, next) {
    const { name, bankName, description } = req.body
    if (!name || !bankName || !description ) return next ({ status: 400, message: `All fields required`})
    const data = models.create(name, bankName, description)
    res.status(200).json({ data })
}

function update(req, res, next) {
    const id = req.params.id
    const { name, bankName, description, transactions } = req.body
    if (!name || !bankName || !description ) return next ({ status: 400, message: `All fields required`})
    const data = models.update(id, name, bankName, description, transactions)
    if (!data) return next ({ status: 400, message: `Account ID ${id} not found`})
    res.status(200).json({ data })
}

function deleteOne(req, res, next){
    const id = req.params.id
    const data = models.deleteOne(id)
    if (!data) return next({ status: 404, message: `Account ID ${id} not found`})
    res.status(200).send({ data })
}

module.exports = { getAll, getOne, create, update, deleteOne }