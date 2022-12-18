/// <reference types="Cypress" />

describe("Validate User Response ", () => {

    it("Validate User Details", () => {

        cy.request({

            method: "GET",
            url: "https://gorest.co.in/public/v2/users/3"            
        })
        .then((response) => {
           return response
        })
        .then((response) => {
            expect(response.body.name).to.eq("Bala Khanna DVM")
        })
        .then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.body).to.have.all.keys(
                'id','name','email','gender','status'
            )
            cy.get(response.body).each((elements) =>{
                console.log(elements)
            })
        })
        })
    })