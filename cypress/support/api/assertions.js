
class Assertions {

    shouldHaveStatus(response, status){
        expect(response.status).to.eq(status)
    }

    propertyShouldBeEqual(response,property,value){
        expect(response).to.have.property(property).equal(value)
    }

    validatePostUsersSchema(response, schema){
        return cy.wrap(response.body).should(
            schema
        )
    }
}

export default new Assertions()