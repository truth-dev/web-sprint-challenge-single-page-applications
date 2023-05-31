describe('Pizza App', () => {
 
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
  
  const textInput = () => cy.get("input[name=user]");

  it("does have the proper elements showing", ()=> {
    textInput().should('exist');
  })

  it("can type your name in the input box", () => {
    textInput()
    .should('have.value', "")
    .type("Natasha")
    .should("have.value", "Natasha");
  })


})