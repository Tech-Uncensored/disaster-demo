var express = require('express');
var router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../lib/auth')
const db = require('../models/')
const session = require('express-session')

/* GET home page. */
router.get('/', forwardAuthenticated, function(req, res, next) {
  res.render('login', {})
});

router.get('/dashboard', ensureAuthenticated, async (req, res) => {
    let rows = await queryWeatherData()
    let userRows = await queryUserData()
    let regionRows = await queryRegionData()
    let userObject = {
        name: req.user.email
    }
    res.render('dashboard', { data: rows, userData: userRows[0] || {}, regionData: regionRows, userSession: userObject })

    async function queryRegionData() {
        let user_id = req.user.id

        let data = await db.Region.findAll({
            where: {
                user_id: user_id
            }
        })

        return data
    }

    async function queryWeatherData() {

        let data = await db.Weather.findAll()

        return data
    }

    async function queryUserData() {
        let user_id = req.user.id

        /* BREAK HERE */ 
        let data = await db.Settings.findOrCreate({
            where: {
                user_id: user_id
            }
        })

        return data
    }
})

module.exports = router;
