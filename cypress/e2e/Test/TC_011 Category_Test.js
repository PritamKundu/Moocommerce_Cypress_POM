import { Categories } from "../../PageObjects/Pages/TC_011 Category_Page";

describe("Verify All categories icon & text", () => {
  const category = new Categories();

  before(() => {
    cy.openUrl();
  });

  it("Verify the 'Kategorier' text is visible", () => {
    category.verifySectionTitle("Kategorier");
    cy.wait(2000);
  });

  it("Verify 'Barneklær' category icon & text", () => {
    category.verifyCategoriesIcon("1");
    category.verifyCategoriesName("Barneklær");
    cy.wait(2000);
  });

  it("Verify 'Barnesko' category icon & text", () => {
    category.verifyCategoriesIcon("2");
    category.verifyCategoriesName("Barnesko");
    cy.wait(2000);
  });

  it("Verify 'Barnevogner' category icon & text", () => {
    category.verifyCategoriesIcon("3");
    category.verifyCategoriesName("Barnevogner");
    cy.wait(2000);
  });

  it("Verify 'Bilstoler' category icon & text", () => {
    category.verifyCategoriesIcon("4");
    category.verifyCategoriesName("Bilstoler");
    cy.wait(2000);
  });

  it("Verify 'Tilbehør' category icon & text", () => {
    category.verifyCategoriesIcon("9");
    category.verifyCategoriesName("Tilbehør");
    cy.wait(2000);
  });
});
