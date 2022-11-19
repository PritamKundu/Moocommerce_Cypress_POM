///<reference types="cypress-xpath"/>
import "cypress-real-events";

/*Class & Function*/
export class Instagram {
  verifyInstagraImage(instagram_img_number) {
    const instagram_image = '(//figure[@class="wp-block-image size-full"])[' + instagram_img_number + ']';
    cy.xpath(instagram_image).scrollIntoView().should("be.visible");
  }

  verifyInstagraSubTitle(act_instagram_sub_title) {
    const instagram_sub_title = '//p[contains(text(),"' + act_instagram_sub_title + '")]'
    cy.xpath(instagram_sub_title).should("be.visible");
    cy.xpath(instagram_sub_title).should("have.css", "color", "rgb(75, 79, 88)");
    cy.xpath(instagram_sub_title)
      .invoke("text")
      .then((exp_instagram_sub_title) => {
        expect(exp_instagram_sub_title).contains(act_instagram_sub_title);
      });
  }
}
