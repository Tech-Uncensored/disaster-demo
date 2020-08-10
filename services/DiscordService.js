const Discord = require('discord.js');

class DiscordService {
    constructor() {        
        this._client = new Discord.Client();        
        
        this._client.once('ready', () => {
            console.log('Ready!');
        });

        this._client.login(process.env.DISCORD_TOKEN);
    }

    postMessage(channel, message) {
        let c = this._channel(channel);
        c.send(message);
    }

    notifyTubot() {

    }

    _channel(name) {
        return this._client.channels.cache.find ( c => c.name == name);
    }
}

const instance = new DiscordService();
Object.freeze(instance);

module.exports = instance;