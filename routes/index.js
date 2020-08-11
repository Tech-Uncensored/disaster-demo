var express = require('express');
var router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../lib/auth')
const db = require('../models/')
const session = require('express-session');
const DashboardService = require('../services/DashboardService');

/* GET home page. */
router.get('/', forwardAuthenticated, function(req, res, next) {
  res.render('login', {})
});

router.get('/dashboard', ensureAuthenticated, async (req, res) => {
    let dashboard = new DashboardService(db, req.user.id);
    let params = await dashboard.params();
    let userObject = {
        name: req.user.email
    }
    res.render('dashboard', { ...params, userSession: userObject })
})

module.exports = router;
