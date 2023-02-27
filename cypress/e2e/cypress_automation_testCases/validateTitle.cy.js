/// <reference types="Cypress" />

describe('ECommerce Automation Test Suite' , () => {

    beforeEach('Ecommerce Cypress Automation Test Suite ', () => {

        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.title().should('eq','Your store. Login')
        cy.contains('Log in').click()
    })

    it('Validate the title of the page', () => {
      
        cy.title().should('not.eq','Your store. Login');
        cy.title().should('eq','Dashboard / nopCommerce administration');
    })

    it('Validate Side Bar Menu Details',() => {
      cy
       .get('.brand-link ')
       .last()
       .invoke('show')
      cy
        .get('.sidebar-form+nav>ul>li>a>p')
        .should('have.length',10)
    })
})