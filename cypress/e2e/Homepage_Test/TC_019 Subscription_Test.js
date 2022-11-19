import { Subscription } from "../../PageObjects/Homepage/TC_019 Subscription_Page";

describe("Verify the 'Subscribe' option", () => {
  const subscription = new Subscription();

  before(() => {
    cy.openUrl();
  });

  it("Verify the 'Email' & Singnup", () => {
    subscription.verifySubscription()
  });
});
