//Stickerfy created with Cypress
// Start writing your Cypress tests bellow!
//Doubts check: https://on.cypress.io/writing-first-test

//import {slowCypressDown} from "cypress-slow-down"

describe('Stickerfy automation process', () => {

    var TIME = 10000

    beforeEach(() => {
        cy.visit('https://stickerfy.herokuapp.com/')
    })

    it('verifica titulo da aplicação', () => {
        cy.title().should('be.equal', 'Stickerfy')
    })

    it('clicar no botão "Add to cart" no sticker Happy', () => {

        //cy.contains('a:contains(Add to cart)').should('be.visible')

        cy.clock()

        cy.get('a[href*="/add-to-cart/5dd8e2b26c26d0000a675cf9"').click()
        cy.tick(TIME)
        cy.get('a[href*="/add-to-cart/5dd8e2b26c26d0000a675cfa"').click()
        cy.tick(TIME)
        cy.get('a[href*="/add-to-cart/5dd8e2b26c26d0000a675cfb"').click()


    })

})
