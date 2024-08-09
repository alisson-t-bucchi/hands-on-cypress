//Stickerfy created with Cypress
// Start writing your Cypress tests bellow!
//Doubts check: https://on.cypress.io/writing-first-test

//import {slowCypressDown} from "cypress-slow-down"

describe('Stickerfy automation process', () => {

    beforeEach(() => {
        cy.visit('https://stickerfy.herokuapp.com/')
    })

    it('verifica titulo da aplicação', () => {
        cy.title().should('be.equal', 'Stickerfy')
    })




})
