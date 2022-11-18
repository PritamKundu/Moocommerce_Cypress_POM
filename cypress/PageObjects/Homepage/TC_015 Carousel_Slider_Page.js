///<reference types="cypress-xpath"/>
import "cypress-real-events";

/* Locators */
const slider_image =
  '//div[@class="wp-block-cover alignfull is-light has-parallax"]';
const slider_title =
  '//h1[@class="has-text-align-center has-white-color has-text-color"]';

/*Class & Function*/
export class CarouselSlider {
  verifysliderImage() {
    cy.xpath(slider_image).scrollIntoView().should("be.visible");
  }

  verifysliderTitle(act_slider_title) {
    cy.xpath(slider_title).scrollIntoView().should("be.visible");
    cy.xpath(slider_title)
      .invoke("text")
      .then((exp_slider_title) => {
        expect(exp_slider_title).to.eq(act_slider_title);
      });
    cy.xpath(slider_title).should("have.css", "color", "rgb(255, 255, 255)");
  }
}
