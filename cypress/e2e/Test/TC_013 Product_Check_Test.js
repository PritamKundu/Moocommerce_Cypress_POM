import { ProductCheck } from "../../PageObjects/Pages/TC_013 Product_Check_Page";

describe("Check the product visiblility at homepage", () => {
  const prodcuct_check = new ProductCheck();

  before(() => {
    cy.openUrl();
  });

  it("Verify the 'Nyheter' text is visible", () => {
    prodcuct_check.verifyNewsTitle();
  });

  it("Verify the product image", () => {
    prodcuct_check.verifyProductImage("1");
  });

  it("Verify the product title", () => {
    prodcuct_check.verifyProductImage("1", "ROCKING CHAIR BLISS – PINK");
  });

  it("Verify the product price", () => {
    prodcuct_check.veridyProductPrice("1", "kr 999.00,- – kr 1,099.00,-");
  });

  it("Verify the select option", () => {
    prodcuct_check.verifySelectOption("1");
  });

  it("Verify the 'add to wishlist' hyperlink", () => {
    prodcuct_check.verifyAddToWishlist("1");
  });
});
