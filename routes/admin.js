const express = require('express')

const router = express.Router()

const userList = []

router.get('/add-user', (req, res, next) => {
    res.render('add-user', {pageTitle: 'Add User', path: '/admin/add-user'})
})

router.post('/user-added', (req, res, next) => {
    console.log(req.body)
    userList.push({ title: req.body.title })
    res.redirect('/')
})

exports.routes = router
exports.userList = userList