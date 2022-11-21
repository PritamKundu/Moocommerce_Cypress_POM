///<reference types="cypress-xpath"/>
import "cypress-real-events";

/* Locators */
const main_image = ".wp-post-image"
const product_title = 'h1[class="product_title entry-title"]'
const product_sku = '.sku_wrapper'
const product_category = '.posted_in'
const product_price = "(//span[@class='woocommerce-Price-amount amount'])[1]"
const size_title = "//label[@for='size']"
const size = "#size"
const nullstill = ".reset_variations"
const stock = "//span[@class='stock in-stock']"
const decrese_button = "#minus_qty"
const quantity_box = '(//input[@class="input-text qty text"])[1]'
const increse_button = "#plus_qty"
const buy_button = 'button[class="single_add_to_cart_button button alt"]'
const pay_instruction_text = "//legend[contains(text(),'Pay easy with')]"
const payment_gateway_icon = "//fieldset[@class='moo-single-product-payments moo-inherit-color-version']//ul"
const delivery_information = "//div[@class='moo-single-product-extras']"
const product_description = "//li[@id='tab-title-description']"
const product_add_information = "//a[normalize-space()='Tilleggsinformasjon']"
const product_reviews = '//a[contains(text(), "Omtaler")]'
const related_product = "//h2[normalize-space()='Relaterte produkter']"



/*Class & Function*/
export class Product_Page {
  verifyProductInformation(product_number, act_prd_title, act_size) {

    const product_image =
      '(//a[@class="woocommerce-LoopProduct-link woocommerce-loop-product__link"])[' +
      product_number +
      "]";
      cy.xpath(product_image).click()
      cy.wait(3000)

    /* Verify product main image */
    cy.get(main_image).should('be.visible')
    
    /* Verify product title */
    cy.get(product_title).should('be.visible')
    cy.get(product_title).invoke('text').then((exp_prd_title) =>{
      expect(exp_prd_title).to.eq(act_prd_title)
    })
    cy.get(product_title).should('have.css', 'color', 'rgb(58, 58, 58)')

    /* Verify product SKU */
    cy.get(product_sku).should('be.visible')

    /* Verify product category*/
    cy.get(product_category).should('be.visible')

    /* Verify product price*/
    cy.xpath(product_price).should('be.visible')

    /* Verify product size title*/
    cy.xpath(size_title).should('be.visible')
    cy.xpath(size_title).invoke('text').should('eq', 'size')

    /* Verify product size*/
    cy.get(size).select(act_size, {force: true})
    cy.wait(2000)
    cy.get(nullstill).should('be.visible')

    /* Verify product stock*/
    cy.xpath(stock).should('be.visible')

    /* Verify quantity decrase button stock*/
    cy.get(decrese_button).should('be.visible')
    cy.get(decrese_button).click()

    /* Verify product quantity */
    cy.xpath(quantity_box).should('be.visible')
    cy.xpath(quantity_box).click()
    cy.wait(3000)
    cy.xpath(quantity_box).clear()
    cy.xpath(quantity_box).type(10)
    cy.wait(3000)

    /* Verify quantity increase button stock*/
    cy.get(increse_button).should('be.visible')
    cy.get(increse_button).click()

    /* Verify buy button */
    cy.get(buy_button).should('be.visible')
    cy.get(buy_button).invoke('text').should('eq', 'Kjøp')
    cy.wait(500)
    cy.get(buy_button).should('have.css', 'color', 'rgb(0, 0, 0)')
    cy.wait(500)
    cy.get(buy_button).should('have.css', 'border-color', 'rgb(229, 171, 171)')
    cy.wait(500)
    cy.get(buy_button).should('have.css', 'background-color', 'rgb(229, 171, 171)')
    cy.wait(500)

    /* After Hover Buy Button */
    cy.get(buy_button).realHover().should('have.css', 'color', 'rgb(0, 0, 0)')
    cy.wait(500)
    cy.get(buy_button).realHover().should('have.css', 'border-color', 'rgb(229, 171, 171)')
    cy.wait(500)
    cy.get(buy_button).realHover().should('have.css', 'background-color', 'rgb(229, 171, 171)')
    cy.wait(500)

    /* Payment Instruction */
    cy.xpath(pay_instruction_text).should('be.visible');
    cy.xpath(pay_instruction_text).invoke('text').should('eq','Pay easy with');
    cy.xpath(payment_gateway_icon).should('be.visible');

    /* Delivery Information */
    cy.xpath(delivery_information).should('be.visible');

    /* Verify description */
    cy.xpath(product_description).should('be.visible');
    cy.xpath(product_description).invoke('text').should('contain','Beskrivelse ');

    /* Verify additional description */
    cy.xpath(product_add_information).should('be.visible');
    cy.xpath(product_add_information).invoke('text').should('contain','Tilleggsinformasjon ')

    /* Verify product review */
    cy.xpath(product_reviews).should('be.visible');
    cy.xpath(product_reviews).invoke('text').should('contain','Omtaler')

    /* Verify related product */
    cy.xpath(related_product).should('be.visible');
    cy.xpath(related_product).invoke('text').should('eq','Relaterte produkter')

  }
}
