import { Banner } from "../../PageObjects/Pages/TC_010 Banner_Image_Page";
import { SelectedCategories } from "../../PageObjects/Homepage/TC_014 Selected_Categories_Page";

describe("Check the 'Utvalgte kategorier' section", () => {
  const selected_categories = new SelectedCategories();
  const banner = new Banner();

  before(() => {
    cy.openUrl();
  });

  it("Check the 'Utvalgte kategorier' section is visible", () => {
    selected_categories.verifyselectedCategories();
  });

  it("Verify the 'Barneklær' category is visible", () => {
    banner.verifyBanner("4");
    banner.verifyButton("4", "Barneklær");
  });

  it("Verify the 'Barnesko' category is visible", () => {
    banner.verifyBanner("5");
    banner.verifyButton("5", "Barnesko");
  });

  it("Verify the 'Barneklær' category is visible", () => {
    banner.verifyBanner("6");
    banner.verifyButton("6", "Barnevogner");
  });

  it("Verify the 'Bilstoler' category is visible", () => {
    banner.verifyBanner("7");
    banner.verifyButton("7", "Bilstoler");
  });
});
