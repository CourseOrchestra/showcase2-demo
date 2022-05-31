describe("e2e тесты", () => {
  it("Welcome", () => {
    cy.visit("/");
    cy.contains("span", "Welcome");
    cy.contains("span", "Логотип КУРСа");
    cy.contains("span", "Навигатор");
    cy.contains("span", "Грид");
    cy.contains("span", "Состояние");
  });
  it("Логотип КУРСа", () => {
    cy.visit("/logocurs");

    cy.get("#lcurs1").should("have.attr", "href").and("contain", "curs.ru");
  });
  it("Навигатор", () => {
    cy.visit("/navigator");
    cy.contains("h1", "Демонстрация навигатора");
  });
  it("Грид", () => {
    cy.visit("/grid");
    cy.contains("h1", "Демонстрация грида");
  });
  it("Состояние в url", () => {
    cy.visit("/urlstate");
    cy.contains("h1", "Демонстрация состояния в url");
  });
});
