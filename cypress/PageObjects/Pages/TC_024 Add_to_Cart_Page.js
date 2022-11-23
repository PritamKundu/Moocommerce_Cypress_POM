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
const view_cart = "//a[normalize-space()='View Cart']"
const shopping_cart_title = "//h1[@class='entry-title']"
const product_delete_icon = "//span[@class='ahfb-svg-iconset moo-inline-flex']"
const product_quantity_box = 'input[class="input-text qty text"]'
const coupon_code_box = "#coupon_code"
const coupon_code_button = 'button[name="apply_coupon"]'
const update_shopping_cart = '(//button[@name="update_cart"])[1]'
const have_a_coupon = "//p[@id='moo-coupon-trigger']"



/*Class & Function*/
export class Addtocart {
  verifyAddToCart(product_number, act_prd_title, act_size) {

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
   /*  cy.get(decrese_button).should('be.visible')
    cy.get(decrese_button).click() */

    /* Verify product quantity */
    cy.xpath(quantity_box).should('be.visible')
    cy.xpath(quantity_box).click()
    cy.wait(3000)
    cy.xpath(quantity_box).clear()
    cy.xpath(quantity_box).type(10)
    cy.wait(3000)

    /* Verify quantity increase button stock*/
    /* cy.get(increse_button).should('be.visible')
    cy.get(increse_button).click() */

    /* Verify buy button */
    cy.get(buy_button).should('be.visible')
    cy.get(buy_button).invoke('text').should('eq', 'Kjøp')
    cy.wait(500)
    cy.get(buy_button).should('have.css', 'color', 'rgb(0, 0, 0)')
    cy.wait(1500)
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

    /* Product cart page "view cart" button */
    cy.xpath(view_cart).should('be.visible');
    cy.xpath(view_cart).invoke('text').should('eq', 'View Cart');
    cy.wait(500)
    cy.xpath(view_cart).should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.wait(500)
    cy.xpath(view_cart).should('have.css', 'border-color', 'rgb(119, 119, 119)')
    cy.wait(500)
    cy.xpath(view_cart).should('have.css', 'background-color', 'rgb(119, 119, 119)')
    cy.xpath(view_cart).click()

    /* Shopping cart */
    cy.xpath(shopping_cart_title).should('be.visible')
    cy.xpath(shopping_cart_title).invoke('text').should('eq', 'Handlekurv');

    /* Product delete icon */
    cy.xpath(product_delete_icon).should('be.visible')
    cy.wait(5000)

    /* Verify quantity decrase button stock*/
    // cy.get(decrese_button).should('be.visible')
    // cy.get(decrese_button).click()

    /* Verify product quantity */
    cy.get(product_quantity_box).should('be.visible')
    cy.get(product_quantity_box).click()
    cy.wait(3000)
    cy.get(product_quantity_box).clear()
    cy.get(product_quantity_box).type(10)
    
    /* Verify quantity increase button stock*/
    // cy.get(increse_button).should('be.visible')
    // cy.get(increse_button).click({ force: true })

    /* Verify coupon code box*/
    cy.get(coupon_code_box).should('be.visible')
    cy.get(coupon_code_box).should('have.attr', 'placeholder', 'Kupongkode')
    cy.get(coupon_code_box).type('ASDFGH')

    /* Verify coupon button*/
    cy.get(coupon_code_button).should('be.visible')
    cy.get(coupon_code_button).invoke('text').should('eq', 'Bruk rabattkupong')
    cy.get(coupon_code_button).type('ASDFGH')
    cy.wait(500)
    cy.get(coupon_code_button).should('have.css', 'color', 'rgb(0, 0, 0)')
    cy.wait(500)
    cy.get(coupon_code_button).should('have.css', 'border-color', 'rgb(229, 171, 171)')
    cy.wait(500)
    cy.get(coupon_code_button).should('have.css', 'background-color', 'rgb(229, 171, 171)')
    cy.wait(500)

    /* After Hover coupon Button */
    cy.get(coupon_code_button).realHover().should('have.css', 'color', 'rgb(0, 0, 0)')
    cy.wait(500)
    cy.get(coupon_code_button).realHover().should('have.css', 'border-color', 'rgb(229, 171, 171)')
    cy.wait(500)
    cy.get(coupon_code_button).realHover().should('have.css', 'background-color', 'rgb(229, 171, 171)')
    cy.wait(1000)
    cy.get(coupon_code_button).click({force:true})

    /* Verify update shopping cart button*/
    //cy.get(increse_button).click({ force: true })
    cy.xpath(update_shopping_cart).should('be.visible')
    cy.xpath(update_shopping_cart).invoke('text').should('eq', 'Oppdater handlekurv')
    cy.xpath(update_shopping_cart).should('have.css', 'color', 'rgb(0, 0, 0)')
    cy.wait(500)
    cy.xpath(update_shopping_cart).should('have.css', 'border-color', 'rgb(229, 171, 171)')
    cy.wait(500)
    cy.xpath(update_shopping_cart).should('have.css', 'background-color', 'rgb(229, 171, 171)')
    cy.wait(500)

    /* verify have a coupon hyperlink */
    // cy.xpath(have_a_coupon).should('be.visible')
    // cy.xpath(have_a_coupon).invoke('text').should('eq', 'Have a coupon?')
    // cy.xpath(have_a_coupon).click()

  }
}
