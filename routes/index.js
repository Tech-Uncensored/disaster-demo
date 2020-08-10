var express = require('express');
var router = express.Router();

const songs = [
  {
    "title": "Song 1",
    "coverart": "https://picsum.photos/seed/song1/300",
    "playcount": 2,
    "url": "https://www.youtube.com/watch?v=eof02pn4KtM"
  },
  {
    "title": "Song 2",
    "coverart": "https://picsum.photos/seed/song2/300",
    "playcount": 15,
    "url": "https://www.youtube.com/watch?v=YnmOmNqBWtM"
  },
  {
    "title": "Song 3",
    "coverart": "https://picsum.photos/seed/song3/300",
    "playcount": 8,
    "url": "https://www.youtube.com/watch?v=MEkaqZecpUQ"
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Disaster Demo", songs: songs });
});

module.exports = router;
