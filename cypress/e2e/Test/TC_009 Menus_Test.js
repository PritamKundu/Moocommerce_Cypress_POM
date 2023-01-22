import { Menus } from "../../PageObjects/Pages/TC_009 Menus_Page ";
import { Product_Page } from "../../PageObjects/Pages/TC_023 Product_Page"

describe("Verify All menus", () => {
  const menus = new Menus();

  before(() => {
    cy.openUrl();
  });

  it("Verify the 'Hjem' menu ", () => {
    menus.verifyMenus("Hjem", "");
  });

  
  it("Verify the 'Inspirasjon' menu ", () => {
    menus.verifyMenus("Inspirasjon", "inspirasjon/");
  });

  it("Verify the 'Kontakt oss' menu ", () => {
    menus.verifyMenus("Kontakt oss", "kontakt/");
  });

  it("Verify the 'Om Oss' menu ", () => {
    menus.verifyMenus("Om Oss", "om-oss/");
  });

  it("Verify the 'Nettbutikk' menu ", () => {
    menus.verifyMenus("Nettbutikk", "shop/");
  });

  it("Verify the 'Ønskeliste' menu ", () => {
    menus.verifyMenus("Ønskeliste", "onskeliste/");
  });
  
});

