//file with some backend tests

describe('Testes de backend', () => {
    
    it('retornar status 200'), () => {
        cy.request({
            url: 'https://stickerfy.herokuapp.com/',
            failOnStatusCode: false, 
        }).its('status').should('be equal', 200); 
    }

})