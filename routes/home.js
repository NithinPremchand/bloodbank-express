const express = require('express')
const router = express.Router()

router.use(express.static('public'))

/* router.get('/',(req, res) => {
    res.render('medicine/prescription_add')
}) */

router.get('/',(req, res) => {
    res.render('home')
})


module.exports = router