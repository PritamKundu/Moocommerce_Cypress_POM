import { HomePage } from "../../PageObjects/Pages/TC_001 Home_Page";

describe("Check the Homepage", () => {
  const homepage = new HomePage();

  before(() => {
    cy.visit("");
    cy.viewport(1280, 720)
  });

  it("Verify the URL", () => {
    homepage.verify_Url("https://mooleker.moocommerce.no/");
  });

  it("Verify the Homepage logo is visible", () => {
    homepage.homepage_logo();
  });
});
