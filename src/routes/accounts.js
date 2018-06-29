const express = require('express')
let router = express.Router()
let ctrl = require('../controllers/accounts')

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getOne)
router.post('/', ctrl.create)
router.put('/:id', ctrl.update)
router.delete('/', ctrl.deleteOne)

module.exports = router