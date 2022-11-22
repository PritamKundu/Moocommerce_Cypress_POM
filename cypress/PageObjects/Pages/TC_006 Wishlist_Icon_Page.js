///<reference types="cypress-xpath"/>
import "cypress-real-events";

/*Locators*/
const wishlist_icon = '(//span[@class="wishlist_products_counter_text"])[1]';
const wishlist_count = '(//span[@class="wishlist_products_counter_number"])[1]';

/*Class & Function*/
export class WishlistIcon {
  verifyWishlistIcon() {
    cy.xpath(wishlist_icon).should("be.visible");
    cy.xpath(wishlist_icon).click();
  }

  verifyWishlistCount() {
    cy.xpath(wishlist_count).should("be.visible");
    cy.xpath(wishlist_count).should(
      "have.css",
      "background-color",
      "rgb(229, 171, 171)"
    );
    cy.xpath(wishlist_count).click();
  }
}
