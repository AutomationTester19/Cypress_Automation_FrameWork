/// <reference types="Cypress" />


describe("Validate User Response ", () => {

    it("Validate User Details", () => {

        let responseList = [];
        cy.request({

            method: "GET",
            url: "https://gorest.co.in/public/v2/users/2570"            
        })
        .then((response) => {
            return response
        })
         .should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.all.keys(
                'id','name','email','gender','status'
            )
            cy.get(response.body).each((elements) => {
                responseList.push(elements)
            })
           return responseList;
         })
         .then((responseList) => {
            responseList
            .filter((value) => value == "2570")
         })

    })
})
    /**
     * expect(response.body.name).to.eq("Rep. Arya Jha")
            
            
        })
     **/