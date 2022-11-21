import { Addtocart } from "../../PageObjects/Homepage/TC_024 Add_to_Cart_Page"


describe("Verify product information page ", () => {
  const addtocart = new Addtocart();

  before(() => {
    cy.visit('/shop')
    cy.viewport(1280, 720)
  });

  it("Verify product information page", () => {
    addtocart.verifyAddToCart(2, 'Baby Body Lyse grønn', 'M')
  });

});
