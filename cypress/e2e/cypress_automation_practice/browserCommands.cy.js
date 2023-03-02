/// <reference types="cypress"/>

describe('Launch Browser and Application ', () => {

   beforeEach('Launch NOP-Ecommerce Application', () => {
      cy.visit('https://admin-demo.nopcommerce.com/login')
      cy.title().should('eq','Your store. Login')
   })
   it('Field Level Validations ', () => {

       cy.get('.email').should('be.visible')
       cy.get('.password').should('be.visible')
       cy.get('.login-button').should('be.enabled')
   })

   it("Verify Attribute Values", () => {

      cy.
         get('.login-button')
         .should('have.attr','type')
         .and('contains','submit')

   })

   it("Validate Title After login", () => {

      cy.get('.login-button').should('be.enabled').click()
      cy.title().should('eq','Dashboard / nopCommerce administration')

   })
   it("Click on Search Box", () => {

      cy.get('.login-button').should('be.enabled').click()
      cy.get('#nopSideBarPusher').click()
      cy.get('#search-box span > input')
        .click()
        

   })

   
})