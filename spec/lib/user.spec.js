const db = require('../models/index.spec')
const User = require('../../lib/user');

describe('user details', function() {    
    it('returns details for a user', function() {
        let user = new User(db, 1);
        user.userDetails
        .then( (details) => {
            expect(details.location).toBe("Gothem City");
        } )        
    })
})

describe('user region data', function() {
    it('returns region data for a user', function() {
        let user = new User(db, 1);
        user.regionData
        .then( data => {
            expect(data[0].region).toBe("northwest");
        })        
    })
})