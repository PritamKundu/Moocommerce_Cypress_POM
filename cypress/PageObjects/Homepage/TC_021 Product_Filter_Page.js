///<reference types="cypress-xpath"/>
import "cypress-real-events";

/* Locators */
const total_product = '.woocommerce-result-count'
const product_filter = 'select[class="orderby"]'


/*Class & Function*/
export class Product_Filter {
  verifyProductFilter(act_product_filter_number, act_product_filter_name) {
    /* Verify Total Product */
    cy.get(total_product).should('be.visible')
    cy.get(total_product).should('have.css', 'color', 'rgb(75, 79, 88)')

    /* Verify Procuct filter at shop page */
    cy.get(product_filter).should('be.visible');
    cy.get(product_filter).select(act_product_filter_number).should('contain', act_product_filter_name)
    cy.get(product_filter).select(3).should('have.css', 'color', 'rgb(102, 102, 102)')
  }
}
