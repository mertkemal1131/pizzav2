describe("Pizza Sipariş Formu - Cypress E2E", () => {

  beforeEach(() => {
    cy.visit("http://localhost:5173/Order");
  });

  it("input alanına metin girilebilir", () => {
    cy.get('textarea[name="note"]')
      .type("Az acı olsun")
      .should("have.value", "Az acı olsun");
  });

  it("birden fazla malzeme seçilebilir", () => {
  cy.contains("Pepperoni").click();
  cy.contains("Sosis").click();
  cy.contains("Soğan").click();
  cy.contains("Mısır").click();

  cy.get('input[name="toppings"]:checked')
    .should("have.length", 4);
});

 it("form başarıyla gönderilir", () => {
  cy.intercept("POST", "https://reqres.in/api/orders", {
    statusCode: 201,
    body: { id: 1 }
  }).as("postOrder");

  cy.contains("M").click();
  cy.get('select[name="dough"]').select("normal");

  cy.contains("Pepperoni").click();
  cy.contains("Sosis").click();
  cy.contains("Soğan").click();
  cy.contains("Mısır").click();

  cy.get('button[type="submit"]')
    .should("not.be.disabled")
    .click();

  
  cy.url().should("include", "/success");
});


});
