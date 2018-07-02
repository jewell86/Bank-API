const uuid = require('uuid/v4')

let accounts = []

function getAll(limit) {
    return limit? accounts.splice(0, limit) : accounts
}

function getOne(id) {
    return accounts.find(account => account.id === id)
}

function create(name, bankName, description) {
    const account = { id: uuid(), name, bankName, description, transactions : {}}
    accounts.push(account)
    return account
}

function update(id, name, bankName, description, transactions) {
    let account = accounts.find(account => account.id === id)
    let errors = []
    if(!account) {
        errors.push(`Accounts ID ${id} not found`)
        return { errors }
    }
    const index = accounts.indexOf(account)
    accounts.splice(index, 1)
    let newAccount = { id, name, bankName, description, transactions : {} }
    accounts.push(newAccount)
    return newAccount
}

function deleteOne(id){
    let deletedAccount = accounts.find(account => account.id === id)
    const index = accounts.indexOf(deletedAccount)
    accounts.splice(index, 1)
    return deletedAccount
}

module.exports = { getAll, getOne, create, update, deleteOne, accounts }