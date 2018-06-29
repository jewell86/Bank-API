const accounts = require('../data/accounts.data.json')
const uuid = require('uuid/v4')

function getAll(limit) {
    return limit? accounts.splice(0, limit) : accounts
}

function getOne(id){
    return accounts.find(account => account.id === id)
}

function create(name, bankName, description, transactions){
    const account = { id: uuid(), name, bankName, description, transactions : {}}
    accounts.l.push(account)
    return account
}

function update(id, name, bankName, description, transactions){
    let account = accounts.find(account => account.id === id)
    let errors = []
    if(!account) {
        errors.push(`Accounts ID ${id} not found`)
        return { errors }
    }
    account = { id, name, bankName, description, transactions }
    return account
}

function deleteOne(){
    let deletedAccount = accounts.find(account => account.id === id)
    accounts.filter(account => account !== deletedAccount)
    return deletedAccount
}




module.exports = { getAll, getOne, create, update, deleteOne }