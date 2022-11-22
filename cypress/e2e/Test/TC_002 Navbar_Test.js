import { Navbar } from "../../PageObjects/Pages/TC_002 Navbar_Page";

describe("Check the navbar content", () => {
  const navbar = new Navbar();

  before(() => {
    cy.openUrl();
  });

  it("Verify the navbar content 'Gratis frakt over 999 kr' ", () => {
    navbar.verifyNavBar("Gratis frakt over 999 kr");
  });

  it("Verify the navbar content 'Raske leveranser' ", () => {
    navbar.verifyNavBar("Raske leveranser");
  });

  it("Verify the navbar content '30 dagers åpne kjøp' ", () => {
    navbar.verifyNavBar("30 dagers åpne kjøp");
  });
});
