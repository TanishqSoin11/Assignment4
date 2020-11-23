const express = require('express')

const adminData = require('./admin')

const router = express.Router()

router.get('/', (req, res, next) => {
    const userList = adminData.userList
    res.render('users', { users: userList, pageTitle: 'Users', path:'/' })
})

module.exports = router