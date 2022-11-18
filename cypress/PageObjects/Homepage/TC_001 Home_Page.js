///<reference types="cypress-xpath"/>

/*Locator*/
const homelogo = "(//img[@alt='mooleker'])[1]";

/*Class & Function*/
export class HomePage {
  homepage_logo() {
    cy.xpath(homelogo).should("be.visible");
    cy.wait(2000);
  }

  verify_Url(act_url) {
    cy.url().then((exp_url) => {
      expect(exp_url).to.eq(act_url);
      cy.log(exp_url);
    });
  }
}
