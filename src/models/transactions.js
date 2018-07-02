const accountz = require('./accounts.js')
let accounts = accountz.accounts
const uuid = require('uuid/v4')

function getAll(id) {
    let account = accounts.find(account => account.id === id)
    return account.transactions
}

function getOne(id, transactionId) {
    let account = accounts.find(account => account.id === id)
    let transactions = account.transactions
    return transactions.find(transaction => transaction.id === transactionId)
}

function create(id, title, amount, pending) {
    let account = accounts.find(account => account.id === id)
    account.transactions = [{ id: uuid(), title, amount, pending },]
    return account.transactions
}

function update(id, transactionId, title, amount, pending) {
    let account = accounts.find(account => account.id === id)
    let transactions = account.transactions
    let transaction = transactions.find(transaction => transaction.id === transactionId)
    let errors = []
    if(!transaction) { 
        errors.push(`transactions ID ${id} not found`)
        return { errors }
    }
    const index = transactions.indexOf(transaction)
    transactions.splice(index, 1)
    let newTransaction = { id, title, amount, pending }
    transactions.push(newTransaction)
    return newTransaction
}

function deleteOne(id, transactionId){
    let account = accounts.find(account => account.id === id)
    let transactions = account.transactions
    let deletedTransaction = transactions.find(transaction => transaction.id === transactionId)
    const index = transactions.indexOf(deletedTransaction)
    transactions.splice(index, 1)
    return deletedTransaction
}




module.exports = { getAll, getOne, create, update, deleteOne }