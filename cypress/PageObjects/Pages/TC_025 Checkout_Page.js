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
const product_successfully_cart = "//div[@class='xoo-cp-atcn xoo-cp-success']"
const product_cart_delet_icon = 'span[class="xoo-cp-icon-cross xoo-cp-remove-pd"]'
const product_cart_decrease = "span[class='xcp-minus xcp-chng']"
const product_cart_increase = "span[class='xcp-plus xcp-chng']"
const product_quantity_add = "input[class='xoo-cp-qty']"
const product_total_price = "//div[@class='xoo-cp-ptotal']"
const checkout = "//a[normalize-space()='Checkout']"
const cash_register_title = "//h1[@class='entry-title']"
const subtotal = "(//th[contains(text(),'Delsum')])[1]"
const freight = "(//th[contains(text(),'Frakt')])[1]"
const total = "(//th[contains(text(),'Totalt')])[1]"
const order_comments = '#order_comments'

/*Class & Function*/
export class Checkout {
  verifyCheckout(product_number, act_prd_title, act_size) {

    const product_image =
      '(//a[@class="woocommerce-LoopProduct-link woocommerce-loop-product__link"])[' +
      product_number +
      "]";
    cy.xpath(product_image, { timeout: 10000 }).click()
    cy.wait(5000)

    /* Verify product main image */
    cy.get(main_image, { timeout: 10000 }).should('be.visible')

    /* Verify product title */
    cy.get(product_title).should('be.visible')
    cy.get(product_title).invoke('text').then((exp_prd_title) => {
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
    cy.get(size).select(act_size, { force: true })
    cy.wait(2000)
    cy.get(nullstill).should('be.visible')

    /* Verify product stock*/
    cy.xpath(stock).should('be.visible')
    cy.wait(3000)

    /* Verify quantity decrase button stock*/
    // cy.get(decrese_button).should('be.visible')
    // cy.get(decrese_button).click()

    /* Verify product quantity */
    cy.xpath(quantity_box).should('be.visible')
    cy.xpath(quantity_box).click()
    cy.wait(3000)
    cy.xpath(quantity_box).clear()
    cy.xpath(quantity_box).type(10)
    cy.wait(3000)

    /* Verify quantity increase button stock*/
    // cy.get(increse_button).should('be.visible')
    // cy.get(increse_button).click()

    /* Verify buy button */
    cy.get(buy_button).should('be.visible')
    cy.get(buy_button).invoke('text').should('eq', 'Kjøp')
    cy.wait(500)
    cy.get(buy_button).should('have.css', 'color', 'rgb(0, 0, 0)')
    cy.wait(500)
    // cy.get(buy_button).should('have.css', 'border-color', 'rgb(229, 171, 171)')
    // cy.wait(500)
    cy.get(buy_button).should('have.css', 'background-color', 'rgb(229, 171, 171)')
    cy.wait(500)

    /* After Hover Buy Button */
    cy.get(buy_button).realHover().should('have.css', 'color', 'rgb(0, 0, 0)')
    cy.wait(500)
    // cy.get(buy_button).realHover().should('have.css', 'border-color', 'rgb(229, 171, 171)')
    // cy.wait(500)
    // cy.get(buy_button).realHover().should('have.css', 'background-color', 'rgb(229, 171, 171)')
    // cy.wait(500)
    cy.get(buy_button).click()
    cy.wait(5000)

    /* Product successfully cart */
    cy.xpath(product_successfully_cart).should('be.visible');
    cy.xpath(product_successfully_cart).invoke('text').should('eq', 'Product successfully added to your cart');

    /* Product cart delete icon */
    cy.get(product_cart_delet_icon).should('be.visible');

    /* Product cart decrease */
    // cy.get(product_cart_decrease).should('be.visible');
    // cy.get(product_cart_decrease).click()

    /* Product quantity add */
    cy.get(product_quantity_add).should('be.visible');
    cy.get(product_quantity_add).clear()
    cy.get(product_quantity_add).click()
    cy.get(product_quantity_add).type(10)

    /* Product cart increase */
    // cy.get(product_cart_increase).should('be.visible');
    // cy.get(product_cart_increase).click()

    /* Product cart total price */
    cy.xpath(product_total_price).should('be.visible');

    /* Product cart page "check" button */
    cy.xpath(checkout).should('be.visible');
    cy.xpath(checkout).invoke('text').should('eq', 'Checkout');
    cy.wait(500)
    cy.xpath(checkout).should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.wait(500)
    cy.xpath(checkout).should('have.css', 'border-color', 'rgb(119, 119, 119)')
    cy.wait(500)
    cy.xpath(checkout).should('have.css', 'background-color', 'rgb(119, 119, 119)')
    cy.xpath(checkout).click()
    cy.wait(5000)

    /* Verify Cash register */
    cy.xpath(cash_register_title).should('be.visible')
    cy.xpath(cash_register_title).invoke('text').should('eq', 'Kasse');
    cy.wait(5000)

    /* Verify subtotal title */
    cy.xpath(subtotal).invoke('show')
     
    /* Verify freight title */
    cy.xpath(freight).invoke('show')
    
    /* Verify total title */
    cy.xpath(total).invoke('show')
    
    /* Verify Product comment box */
    cy.get(order_comments).invoke('show')
  }
}
