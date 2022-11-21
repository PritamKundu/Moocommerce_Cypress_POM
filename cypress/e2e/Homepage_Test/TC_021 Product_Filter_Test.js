import { Product_Filter } from "../../PageObjects/Homepage/TC_021 Product_Filter_Page";
import { Menus } from "../../PageObjects/Homepage/TC_009 Menus_Page ";


describe("Verify the product filtering", () => {
  const product_filter = new Product_Filter();
  const menu = new Menus();

  before(() => {
    cy.visit('/shop')
  });

  it("Verify the product filtering", () => {
    menu.verifyMenus("Nettbutikk", "shop/");
    product_filter.verifyProductFilter(3, 'Sorter etter siste')
  });
  
});
