/// <reference types="Cypress" />

describe('ECommerce Automation Test Suite' , () => {

    it('Validate the title of the page', () => {
      
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.title().should('eq','Your store. Login')
        cy.contains('Log in').click()
        cy.title().should('not.eq','Your store. Login');
        cy.title().should('eq','Dashboard / nopCommerce administration');
    })
})