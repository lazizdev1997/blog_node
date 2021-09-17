const { Router } = require('express')

const router = Router()

router.get('/', async(req, res) => {
    try {
       res.render('home', {
           title: "Home page"
       })
    } catch(err) {
        console.log(err);
    }
})

module.exports = router