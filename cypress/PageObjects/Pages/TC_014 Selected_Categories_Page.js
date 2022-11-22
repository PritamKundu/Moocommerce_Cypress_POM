///<reference types="cypress-xpath"/>
import "cypress-real-events";

/* Locators */
const selected_categories = "//h2[normalize-space()='Utvalgte kategorier']";

/*Class & Function*/
export class SelectedCategories {
  verifyselectedCategories() {
    cy.xpath(selected_categories).scrollIntoView().should("be.visible");
    cy.xpath(selected_categories)
      .invoke("text")
      .then((exp_selected_categories) => {
        expect(exp_selected_categories).to.eq("Utvalgte kategorier");
      });
    cy.xpath(selected_categories).should("have.css", "color", "rgb(0, 0, 0)");
  }
}
