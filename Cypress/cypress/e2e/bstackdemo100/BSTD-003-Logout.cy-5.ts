describe('BSTD 003 - Logout', () => {
  it('Login, verify the username, logout & verify the URL', () => {
    cy.visit('https://bstackdemo.com/')
      .get("#signin")
      .click()
      .get("#react-select-2-input")
      .type("demouser{enter}",{force: true})
      .get("#react-select-3-input")
      .type("testingisfun99{enter}",{force: true})
      .get("#login-btn")
      .click()
      .get("span.username")
      .should('have.text','demouser')
      .url()
      .should('include','signin=true')
      .get("#logout")
      .click()
      .url()
      .should('eq',"https://bstackdemo.com/")
  })
})
