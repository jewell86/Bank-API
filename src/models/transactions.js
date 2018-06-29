const accounts = require('../data/accounts.data.json')
const uuid = require('uuid/v4')

function getAll(id) {
    let account = accounts.find(account => account.id === id)
    return account.transactions
}

function getOne(id, transactionId){
    let account = accounts.find(account => account.id === id)
    let transactions = account.transactions
    return transactions.find(transaction => transaction.id === transactionId)
}

function create(id, title, amount, pending) {
    let account = accounts.find(account => account.id === id)
    account.transactions = [{ id: uuid(), title, amount, pending },]
    return account.transaction
}

function update(id, transactionId, title, amount, pending){
    let account = accounts.find(account => account.id === id)
    let transactions = account.transactions
    let transaction = transactions.find(transaction => transaction.id === transactionId)
    let errors = []
    if(!transaction) {
        errors.push(`transactions ID ${id} not found`)
        return { errors }
    }
    transaction = { id, title, amount, pending }
    return transaction
}

function deleteOne(id, transactionId){
    let account = accounts.find(account => account.id === id)
    let transactions = account.transactions
    let deletedTransaction = transactions.find(transaction => transaction.id === transitionId)
    transactions.filter(transaction => transaction !== deletedTransaction)
    return deletedTransaction
}




module.exports = { getAll, getOne, create, update, deleteOne }