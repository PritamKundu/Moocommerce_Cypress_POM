import { HomePage } from "../../PageObjects/Homepage/TC_001 Home_Page";

describe("Check the Homepage", () => {
  const homepage = new HomePage();

  before(() => {
    cy.visit("");
  });

  it("Verify the URL", () => {
    homepage.verify_Url("https://mooleker.moocommerce.no/");
  });

  it("Verify the Homepage logo is visible", () => {
    homepage.homepage_logo();
  });
});
