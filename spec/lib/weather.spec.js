const db = require('../models/index.spec')
const Weather = require('../../lib/weather');

describe('weather data', function() {    
    it('returns weather data', function() {
        let weather = new Weather(db);
        weather.data
        .then( (data) => {
            expect(data[0].temp).toBe(70);
        } )        
    })
})