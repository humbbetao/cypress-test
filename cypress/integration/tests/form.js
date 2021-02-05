/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('.type() - type into a DOM element', () => {
        cy.get('#email')
            .type('fake@email.com').should('have.value', 'fake@email.com')
        cy.get('#password')
            .type('123456').should('have.value', '123456')
        cy.get('#checkbox').click()
        cy.get('#submit').click()
        cy.get('#toast-title').should('contain', "Parabéns"), 
        cy.get('#toast-message').should('have.text', 'Formulário enviado com sucesso!')
        cy.get('#toast-title button').click()
        cy.contains('#toast').should('not.exist')
    })

})
