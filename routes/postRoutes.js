const { Router } = require('express')

const router = Router()

router.get('/add', (req, res) => {
    res.render('addPost/add', {
        title: 'Add post'
    })
})

module.exports = router