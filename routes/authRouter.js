const { Router } = require('express')

const router = Router()

router.get('/login', (req, res) => {
    res.render('auth/login', {
        title: 'Login page'
    })
})

router.get('/register', (req, res) => {
    res.render('auth/register', {
        title: 'Register page'
    })
})

module.exports = router