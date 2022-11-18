///<reference types="cypress-xpath"/>
import "cypress-real-events";

/* Locators */
const news = "//h2[contains(text(),'Nyheter')]";
const view_wishlist = "//button[normalize-space()='View Wishlist']";
const close = "//button[normalize-space()='Lukk']";

/*Class & Function*/
export class ProductCheck {
  verifyNewsTitle() {
    cy.xpath(news).scrollIntoView().should("be.visible");
    cy.xpath(news)
      .invoke("text")
      .then((exp_news_text) => {
        expect(exp_news_text).to.eq("Nyheter");
      });
  }

  verifyProductImage(product_number) {
    const product_image =
      '(//a[@class="woocommerce-LoopProduct-link woocommerce-loop-product__link"])[' +
      product_number +
      "]";
    cy.xpath(product_image).should("be.visible");
    cy.xpath(product_image).click();
    cy.go("back");
  }

  verifyProductTitle(product_number, act_product_title) {
    const product_title =
      '(//h2[@class="woocommerce-loop-product__title"])[' +
      product_number +
      "]";
    cy.xpath(product_title).should("be.visible");
    cy.xpath(product_title)
      .invoke("text")
      .then((exp_product_title) => {
        expect(exp_product_title).to.eq(act_product_title);
      });
    cy.xpath(product_title).click();
    cy.go("back");
    cy.wait(2000);
  }

  veridyProductPrice(product_number, act_product_price) {
    const product_price = '(//span[@class="price"])[' + product_number + "]";
    cy.xpath(product_price).should("be.visible");
    cy.xpath(product_price).contains(act_product_price);
  }

  verifySelectOption(product_number) {
    const select_option =
      '(//a[@class="button product_type_variable add_to_cart_button "])[' +
      product_number +
      "]";
    cy.xpath(select_option).should("be.visible");
    cy.xpath(select_option)
      .invoke("text")
      .then((exp_select_option) => {
        expect(exp_select_option).to.eq("Velg alternativ");
      });
    cy.xpath(select_option).should(
      "have.css",
      "border-color",
      "rgb(229, 171, 171)"
    );
    cy.wait(1000);
    cy.xpath(select_option).should("have.css", "color", "rgb(0, 0, 0)");
    cy.wait(1000);
    cy.xpath(select_option).should(
      "have.css",
      "background-color",
      "rgb(229, 171, 171)"
    );
    cy.wait(1000);
    cy.xpath(select_option)
      .realHover()
      .should("have.css", "border-color", "rgb(229, 171, 171)");
    cy.wait(1000);
    cy.xpath(select_option)
      .realHover()
      .should("have.css", "color", "rgb(0, 0, 0)");
    cy.wait(1000);
    cy.xpath(select_option)
      .realHover()
      .should("have.css", "background-color", "rgb(229, 171, 171)");
    cy.wait(1000);
    cy.xpath(select_option).click();
    cy.go("back");
  }

  verifyAddToWishlist(product_number) {
    const add_to_wishlist =
      "(//a[contains(@aria-label,'Add to Wishlist')])[" + product_number + "]";
    cy.xpath(add_to_wishlist).should("be.visible");
    cy.xpath(add_to_wishlist)
      .invoke("text")
      .then((exp_wishlist_text) => {
        expect(exp_wishlist_text).to.eq("Add to Wishlist");
      });
    cy.wait(2000);
    cy.xpath(add_to_wishlist).focus().click();
    cy.xpath(view_wishlist).should("be.visible");
    cy.xpath(view_wishlist).should(
      "have.css",
      "border-color",
      "rgb(229, 171, 171)"
    );
    cy.wait(1000);
    cy.xpath(view_wishlist).should("have.css", "color", "rgb(0, 0, 0)");
    cy.wait(1000);
    cy.xpath(view_wishlist).should(
      "have.css",
      "background-color",
      "rgb(229, 171, 171)"
    );
    cy.wait(1000);
    cy.xpath(close).should("be.visible");
    cy.xpath(close).should("have.css", "border-color", "rgb(229, 171, 171)");
    cy.wait(1000);
    cy.xpath(close).should("have.css", "color", "rgb(0, 0, 0)");
    cy.wait(1000);
    cy.xpath(close).should(
      "have.css",
      "background-color",
      "rgb(229, 171, 171)"
    );
    cy.xpath(close).click();
    cy.wait(1000);
  }
}
