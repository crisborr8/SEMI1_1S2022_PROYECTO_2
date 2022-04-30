const { Router } = require('express')
const router = Router()
const controller = require('../controller/controller')

router.post('/login', controller.login)
router.post('/newCriminal', controller.new_criminal)
router.get('/getCriminales', controller.get_criminales)
router.post('/getCriminal', controller.get_criminal)
router.post('/editCriminal', controller.edit_criminal)

module.exports = router