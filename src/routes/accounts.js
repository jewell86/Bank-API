const express = require('express')
let router = express.Router()
let acctCtrl = require('../controllers/accounts')
let transCtrl = require('../controllers/transactions')

router.get('/', acctCtrl.getAll)
router.get('/:id', acctCtrl.getOne)
router.get('/:id/transactions', transCtrl.getAll)
router.get('/:id/transactions/:transactionId', transCtrl.getOne)
router.post('/', acctCtrl.create)
router.post('/:id/transactions', transCtrl.create)
router.put('/:id', acctCtrl.update)
router.put('/:id/transactions/:transactionId', transCtrl.update)
router.delete('/:id', acctCtrl.deleteOne)
router.delete('/:id/transactions/:transactionId', transCtrl.deleteOne)

module.exports = router