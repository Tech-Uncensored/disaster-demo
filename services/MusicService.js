class MusicService {
    constructor(url) {
        this.url = url;
    }

    play() {
        console.log("playing: ", this.url);
    }
}

module.exports = MusicService;