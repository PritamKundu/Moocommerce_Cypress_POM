///<reference types="cypress-xpath"/>

/*Locators*/
const navbar = ".moo-text";

/*Class & Function*/
export class Navbar {
  verifyNavBar(act_nav_content) {
    cy.get(navbar).should("be.visible");
    cy.get(navbar).each(($el, index, $list) => {
      if ($el.text() === act_nav_content) {
        expect($el.text()).to.eq(act_nav_content);
        cy.wait(2000);
      }
    });
  }
}
