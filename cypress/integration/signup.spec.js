/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

import schemas from '../support/api/schemas'
import req from '../support/api/requests'
import assert from '../support/api/assertions'

let Chance = require('chance');
let chance = new Chance();

context('Login endpoint', () => {
    it('New user sign up', () => {
        var email = chance.email()
        var username = chance.first() + chance.last()

        req.postUsers(email,username).then((response)=> {
            assert.shouldHaveStatus(response,200)
            assert.propertyShouldBeEqual(response.body.user,'email',`${email}`)
            assert.propertyShouldBeEqual(response.body.user,'username',`${username}`)
            assert.validatePostUsersSchema(response,schemas.signUpSchema())
            
        })
    });
});