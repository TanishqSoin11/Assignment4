const path = require('path')

const bodyParser = require('body-parser')
const express = require('express')
 
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

const adminData = require('./routes/admin')
const usersRoutes = require('./routes/users')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes)
app.use(usersRoutes)

app.use('/', (req, res, next) => {
    res.status(404).render('404',{pageTitle: 'Page Not Found'})
})

app.listen(3000)