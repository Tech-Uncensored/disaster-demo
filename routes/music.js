let express = require('express');
let router = express.Router();
let MusicService = require('../services/MusicService');
let DiscordService = require('../services/DiscordService');

router.get('/play', function(req, res, next) {
    let {track} = req.query;
    let ms = new MusicService(track);
    ms.play();

    
    DiscordService.postMessage('bottest', 'testing');

    res.send(`playing song # ${track}`);
  });
  
  module.exports = router;