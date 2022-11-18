///<reference types="cypress-xpath"/>
import "cypress-real-events";

/*Class & Function*/
export class SeeAllNews {
  verifySeeAllNewsButton(see_all_news_btn_number, act_btn_text) {
    const helper_puchase_button =
      '(//a[@class="uagb-buttons-repeater wp-block-button__link has-background has-text-color"])[' +
      see_all_news_btn_number +
      "]";
    cy.xpath(helper_puchase_button).scrollIntoView().should("be.visible");
    cy.xpath(helper_puchase_button).should("have.css", "color", "rgb(0, 0, 0)");
    cy.xpath(helper_puchase_button).should(
      "have.css",
      "border-color",
      "rgb(51, 51, 51)"
    );
    cy.xpath(helper_puchase_button).should(
      "have.css",
      "background-color",
      "rgb(229, 171, 171)"
    );
    cy.xpath(helper_puchase_button)
      .invoke("text")
      .then((exp_btn_text) => {
        expect(exp_btn_text).to.eq(act_btn_text);
      });
    cy.xpath(helper_puchase_button)
      .realHover()
      .should("have.css", "color", "rgb(0, 0, 0)");
    cy.xpath(helper_puchase_button)
      .realHover()
      .should("have.css", "background-color", "rgb(200, 200, 200)");
    cy.xpath(helper_puchase_button)
      .realHover()
      .should("have.css", "border-color", "rgb(51, 51, 51)");
      cy.xpath(helper_puchase_button).click()  
  }
}
