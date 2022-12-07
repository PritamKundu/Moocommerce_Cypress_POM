import { Product_Category_Filter } from "../../PageObjects/Pages/TC_022 Product_Category_Filter_Page ";
import { Menus } from "../../PageObjects/Pages/TC_009 Menus_Page ";


describe("Check the product filtering category ", () => {
  const product_catregory_filter = new Product_Category_Filter();
  const menu = new Menus();

  before(() => {
    cy.visit('/shop')
    cy.viewport(1280, 720)
  });

  it("Verify the 'Ukategorisert' product category filtering", () => {
    menu.verifyMenus("Nettbutikk", "shop/");
    product_catregory_filter.verifyProductCatergoryFilter('1', 'Ukategorisert')
  });

  it("Verify the 'AeroMoov' product category filtering", () => {
    menu.verifyMenus("Nettbutikk", "shop/");
    product_catregory_filter.verifyProductCatergoryFilter('2', 'AeroMoov')
  });

  it("Verify the 'Kavat' product category filtering", () => {
    menu.verifyMenus("Nettbutikk", "shop/");
    product_catregory_filter.verifyProductCatergoryFilter('3', 'Kavat')
  });

   
  it("Verify the 'Kuling' product category filtering", () => {
    menu.verifyMenus("Nettbutikk", "shop/");
    product_catregory_filter.verifyProductCatergoryFilter('4', 'Kuling')
  });

});
