import { Account } from "../../PageObjects/Pages/TC_008 Account_Icon_Page";

describe("Verify the 'Account' icon at Navbar", () => {
  const account = new Account();

  before(() => {
    cy.openUrl();
  });

  it("Verify the 'Account' icon at Navbar", () => {
    account.verifyAccountIcon();
  });
});
