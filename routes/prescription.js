const express = require('express')
const router = express.Router()

router.get('/',(req, res) => {
    res.render('medicine/index')
})


module.exports = router