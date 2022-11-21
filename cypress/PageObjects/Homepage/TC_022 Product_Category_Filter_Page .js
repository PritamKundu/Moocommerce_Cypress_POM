///<reference types="cypress-xpath"/>
import "cypress-real-events";

/* Locators */
const product_category_filter = '.woof_show_auto_form ';
const product_category_title = "//h4[contains(text(),'Produktkategorier')]";
const filter_by_price = "(//div[@class='woof_price_filter_dropdown_container'])[1]";
const onsale_checkbox = "(//ins[@class='iCheck-helper'])[5]";
const onsale_text = "(//label[normalize-space()='On sale'])[1]"


/*Class & Function*/
export class Product_Category_Filter {
  verifyProductCatergoryFilter(checkbox_index, act_checkbox_title) {

    const checkbox = '(//div[@class="iradio_square-blue"])[' + checkbox_index + ']'
    const checkbox_title = "(//label[normalize-space()='" + act_checkbox_title + "'])[1]"
    const select_mark_icon = '(//a[@data-name="product_cat"])[' + checkbox_index + ']'

    /* Verify product category filter icon */
    cy.get(product_category_filter).should('be.visible')
    cy.get(product_category_filter).click()

    /* Verify product category filter title */
    cy.xpath(product_category_title).should('be.visible');
    cy.xpath(product_category_title).should('contain', 'Produktkategorier')
    cy.xpath(product_category_title).should('have.css', 'color', 'rgb(58, 58, 58)')

    /* Verify Product Category Checkbox */
    cy.xpath(checkbox).should('be.visible');
    cy.xpath(checkbox).click();
    cy.wait(2000);

    /* Verify Product Category Checkbox Title */
    cy.xpath(checkbox_title).should('be.visible');
    cy.xpath(checkbox_title).invoke('text').should('eq', act_checkbox_title)

    /* Verify After select Product Category red mark icon is visible */
    cy.xpath(select_mark_icon).should('be.visible');

    /* Verify filter price icon dropdown is visible */
    cy.xpath(filter_by_price).should('be.visible').click({ force: true });

    /* Verify filter price icon dropdown is visible */
    cy.xpath(onsale_checkbox).should('not.be.checked')
    cy.xpath(onsale_checkbox).click()
    cy.xpath(onsale_text).should('be.visible')
    cy.xpath(onsale_text).invoke('text').then((exp_onsale_text) =>{
      cy.log(exp_onsale_text);
    })
  }
}
