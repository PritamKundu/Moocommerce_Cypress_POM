///<reference types="cypress-xpath"/>
import "cypress-real-events";

/*Class & Function*/
export class Categories {

  verifySectionTitle(act_categories_text) {
    const categories = "//h2[normalize-space()='"+act_categories_text+"']";
    cy.xpath(categories).scrollIntoView().should("be.visible");
    cy.xpath(categories).should("have.css", "color", "rgb(0, 0, 0)");
    cy.xpath(categories)
      .invoke("text")
      .then((exp_categories_text) => {
        expect(exp_categories_text).to.eq(act_categories_text);
      });
  }

  verifyCategoriesIcon(act_icon_number) {
    const category_icon = '(//figure[@class="wp-block-image aligncenter size-large"])[' + act_icon_number + ']';
    cy.xpath(category_icon).should("be.visible");
  }

  verifyCategoriesName(act_category_name) {
    const category_name =
      '//figcaption[contains(text(),"' + act_category_name + '")]';
    cy.xpath(category_name).should("be.visible");
    cy.xpath(category_name)
      .invoke("text")
      .then((exp_categorie_name) => {
        expect(exp_categorie_name).to.eq(act_category_name);
      });
  }
}
