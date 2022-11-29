import { Checkout } from "../../PageObjects/Pages/TC_025 Checkout_Page"

describe("Verify product checkout page ", () => {
  const checkout = new Checkout();

  before(() => {
    cy.visit('/shop')
    cy.viewport(1280, 720)
  });

  
  it("Verify product checkout page", () => {
    checkout.verifyCheckout(2, 'Baby Body Lyse grønn', 'M')
  });
});
