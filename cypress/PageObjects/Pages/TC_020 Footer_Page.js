///<reference types="cypress-xpath"/>
import "cypress-real-events";

/*Class & Function*/
export class Footer {
  verifyFooter(footer_icon_name, act_footer_button_name) {
    const footer_icon_title = '(//strong[normalize-space()="' + footer_icon_name + '"])[1]';
    const footer_button = '//a[contains(text(),"' + act_footer_button_name + '")]';

    /* Footer Icon Title */
    cy.xpath(footer_icon_title).scrollIntoView().should("be.visible");
    cy.xpath(footer_icon_title)
      .invoke("text")
      .then((exp_footer_icon_title) => {
        expect(exp_footer_icon_title).to.eq(footer_icon_name);
      });
    cy.wait(500)
    cy.xpath(footer_icon_title).should("have.css", "color", "rgb(58, 58, 58)");

    /* Footer Button */
    cy.xpath(footer_button).scrollIntoView().should("be.visible");
    cy.wait(500)
    cy.xpath(footer_button).should("have.css", "color", "rgb(229, 171, 171)");
    cy.wait(500)
    cy.xpath(footer_button)
      .invoke("text")
      .then((exp_footer_icon_title) => {
        expect(exp_footer_icon_title).to.eq(act_footer_button_name);
      });
    cy.xpath(footer_button).click()
  }


}
