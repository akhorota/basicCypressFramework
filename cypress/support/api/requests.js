class Requests {

    postUsers(email, username){
        return cy.api({
            method: 'POST',
            url: `${Cypress.config().baseUrl}/users`,
            body:{
                "user":{
                    "email": `${email}`,
                    "password": "123karate123",
                    "username": `${username}`
                }
            }
        })
    }
}

export default new Requests()