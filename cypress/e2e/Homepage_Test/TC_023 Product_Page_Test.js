import { Product_Page } from "../../PageObjects/Homepage/TC_023 Product_Page"


describe("Verify product information page ", () => {
  const product_page = new Product_Page();

  before(() => {
    cy.visit('/shop')
    cy.viewport(1280, 720)
  });

  it("Verify product information page", () => {
    product_page.verifyProductInformation(2, 'Baby Body Lyse grønn', 'M')
  });

});
