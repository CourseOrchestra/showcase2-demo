// https://docs.cypress.io/api/table-of-contents

describe("e2e тесты", () => {
  it("Начальная страница", () => {
    cy.visit("/");
    cy.contains("span", "Эмблема");
  });
  it("Эмблема Платформы КУРС", () => {
    cy.visit("/emblem");
    //cy.contains("div", "curs.ru");
  });
});
