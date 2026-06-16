describe('My First Test', () => {
  it('Gets, types and asserts', () => {

    cy.visit('https://front.serverest.dev/login')

    cy.url().should('include', '/login')

    cy.get('[data-testid="email"]').type('fake@email.com')

    cy.get('[data-testid="email"]').should('have.value', 'fake@email.com')

    cy.get('[data-testid="senha"]').type('123456')

    cy.get('[data-testid="senha"]').should('have.value', '123456')
  })
})
