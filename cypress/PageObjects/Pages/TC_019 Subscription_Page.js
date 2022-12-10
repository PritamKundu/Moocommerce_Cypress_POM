///<reference types="cypress-xpath"/>
import "cypress-real-events";

/* Locators */
const subs_title = "//h2[contains(text(),'Motta nyheter, varepåfyll og eksklusive tilbud')]"
const subs_para_title = "//p[@class='has-text-align-center has-text-color']"
const email = '//input[@name="EMAIL"]'
const sign_up = '//input[@type="submit"]'

/*Class & Function*/
export class Subscription {

  verifySubscription() {
    
    /* Subscription Title */
    cy.xpath(subs_title).scrollIntoView().should("be.visible");
    cy.xpath(subs_title)
      .invoke("text")
      .then((exp__sub_title) => {
        expect(exp__sub_title).to.eq('Motta nyheter, varepåfyll og eksklusive tilbud');
      });
    cy.xpath(subs_title).should("have.css", "color", "rgb(255, 255, 255)");

    /* Subscription Paragraph Title */
    cy.xpath(subs_para_title).should("be.visible");
    cy.xpath(subs_para_title).should("have.css", "color", "rgb(215, 215, 215)");

    /* Email */
    cy.xpath(email).should("be.visible");
    cy.xpath(email).should("have.css", "color", "rgb(102, 102, 102)");
    cy.xpath(email).should("have.css", "background-color", "rgba(0, 0, 0, 0)");
    cy.xpath(email).should("have.attr", "placeholder", "Enter your email address here…");
    cy.xpath(email).type('mike@gmail.com')

    /* Sign Up Button */
    cy.xpath(sign_up).should("be.visible");
    cy.xpath(sign_up).should("have.css", "color", "rgb(0, 0, 0)");
    cy.xpath(sign_up).should("have.css", "background-color", "rgb(255, 255, 255)");
    cy.xpath(sign_up).should("have.css", "border-color", "rgb(229, 171, 171)");
    cy.xpath(sign_up).should("have.attr", "value", "Sign up");
    cy.xpath(sign_up).click()
  }
}

