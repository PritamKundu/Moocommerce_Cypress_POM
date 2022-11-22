import { Addtocart } from "../../PageObjects/Pages/TC_024 Add_to_Cart_Page"

describe("Verify product add to cart page ", () => {
  const addtocart = new Addtocart();

  before(() => {
    cy.visit('/shop')
    cy.viewport(1280, 720)
  });

  it("Verify product add to cart page", () => {
    addtocart.verifyAddToCart(2, 'Baby Body Lyse grønn', 'M')
  });
  
});
