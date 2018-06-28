const accounts = require(../../data/accounts.data.json)
const uuid = require('uuid')

function getAll(limit) {
    return limit? accounts.splice(0, limit) : accounts
}

function getOne(id){
    const account = accounts.find(account => account.id === id)
    return account
}

function create(name, bankName, description, transactions){
    if (!name || !bankName || !description || ! transactions) return {error}
    let account = { id: uuid(), name, bankName, description, transactions }
    accounts.push(account)
    return acount
}

function update(id, name, bankName, description, transactions){
    const account = accounts.find(account => account.id === id)
    if (!name || !bankName || !description || ! transactions) return {error}
    const { name, bankName, description, transactions } = account
    return account

}

function deleteOne(){
    const account = accounts.find(account => account.id === id)
    members.splice(account.indexOf, 1)
    return account

    
}




module.exports = { getAll, getOne, create, update, deleteOne }