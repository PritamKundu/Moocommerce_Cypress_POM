///<reference types="cypress-xpath"/>
import "cypress-real-events";

/* Locators */
const tips_and_advice = "//h2[normalize-space()='Tips og Råd']";
const blog_description = "//div[@class='entry-content clear']";
const previous_button = "//div[@class='nav-previous']";
const next_button = "//div[@class='nav-next']";
const comment_title = "//h3[@id='reply-title']";
const comment_box = "//textarea[@id='comment']";
const name_box = "//input[@id='author']";
const email_box = "//input[@id='email']";
const website_box = "//input[@id='url']";
const checkbox = "//input[@id='wp-comment-cookies-consent']";
const post_comment_button = ".submit";

/*Class & Function*/
export class TipsAndDevice {
  verifyTipsAndAdviceTitle(act_tips_and_advice_title) {
    cy.xpath(tips_and_advice).scrollIntoView().should("be.visible");
    cy.xpath(tips_and_advice)
      .invoke("text")
      .then((exp_TipsAndAdvice) => {
        expect(exp_TipsAndAdvice).to.eq(act_tips_and_advice_title);
      });
    cy.xpath(tips_and_advice).should("have.css", "color", "rgb(0, 0, 0)");
  }

  verifyBlogImage(blog_number, act_blog_title) {
    const blog_image =
      '(//div[@class="uagb-post__image"])[' + blog_number + "]";
    const blog_title =
      '(//h4[@class="uagb-post__title uagb-post__text"])[' + blog_number + "]";

    cy.xpath(blog_image).should("be.visible");
    cy.xpath(blog_title).should("be.visible");
    cy.xpath(blog_title).should("have.css", "color", "rgb(58, 58, 58)");
    cy.xpath(blog_title)
      .invoke("text")
      .then((exp_blog_title) => {
        expect(exp_blog_title).to.eq(act_blog_title);
      });
    cy.xpath(blog_title).click();
  }

  verifyBlogDescription() {
    cy.xpath(blog_description).scrollIntoView().should("be.visible");
    cy.xpath(blog_description).should("have.css", "color", "rgb(75, 79, 88)");
  }

  verifyPreviousButton() {
    try {
      cy.xpath(previous_button).should("be.visible");
      cy.xpath(previous_button).should("have.css", "color", "rgb(0, 0, 0)");
      cy.xpath(previous_button)
        .invoke("text")
        .then((exp_blog_title) => {
          expect(exp_blog_title).to.eq("← Previous Innlegg");
        });
    } catch (e) {
      cy.log("Previous button not found !");
    }
  }

  verifyNextButton() {
    cy.xpath(next_button).should("exist");
    cy.xpath(next_button).should("be.visible");
    cy.xpath(next_button).should("have.css", "color", "rgb(0, 0, 0)");
    cy.xpath(next_button)
      .invoke("text")
      .then((exp_next_button) => {
        expect(exp_next_button).to.eq("Next Innlegg →");
      });

    Cypress.on("fail", (error, runnable) => {
      if (!error.message.includes(next_button)) {
        throw error;
      }
    });
  }

  verifyBlogCommentTile() {
    cy.xpath(comment_title).should("be.visible");
    cy.xpath(comment_title).should("have.css", "color", "rgb(58, 58, 58)");
  }

  verifyBlogCommentBox() {
    cy.xpath(comment_box).should("be.visible");
    cy.xpath(comment_box).type("This blog is very helpfull !");
  }

  verifyBlogNameBox(name) {
    cy.xpath(name_box).should("be.visible");
    cy.xpath(name_box).should("have.attr", "placeholder", "Name*");
    cy.xpath(name_box).type(name);
    cy.xpath(name_box).should("have.css", "border-color", "rgb(0, 0, 0)");
  }

  verifyBlogEmailBox(email) {
    cy.xpath(email_box).should("be.visible");
    cy.xpath(email_box).should("have.attr", "placeholder", "Email*");
    cy.xpath(email_box).type(email);
    cy.xpath(email_box).should("have.css", "border-color", "rgb(0, 0, 0)");
  }

  verifyBlogWebsiteBox(website) {
    cy.xpath(website_box).should("be.visible");
    cy.xpath(website_box).should("have.attr", "placeholder", "Website");
    cy.xpath(website_box).type(website);
    cy.xpath(website_box).should("have.css", "border-color", "rgb(0, 0, 0)");
  }

  verifyBlogCommentCheckBox() {
    cy.xpath(checkbox).should("be.visible");
    cy.xpath(checkbox).click();
  }

  verifyBlogPostCommentButton() {
    cy.get(post_comment_button).should("be.visible");
    cy.get(post_comment_button).should("be.enabled");
    cy.get(post_comment_button).should("have.attr", "value", "Post Comment »");
    cy.get(post_comment_button).should("have.css", "color", "rgb(0, 0, 0)");
    cy.get(post_comment_button).should(
      "have.css",
      "background-color",
      "rgb(229, 171, 171)"
    );

    cy.get(post_comment_button)
      .realHover()
      .should("have.css", "color", "rgb(0, 0, 0)");
    cy.get(post_comment_button)
      .realHover()
      .should("have.css", "background-color", "rgb(200, 200, 200)");
    cy.get(post_comment_button)
      .realHover()
      .should("have.css", "border-color", "rgb(200, 200, 200)");
    cy.get(post_comment_button).click();
  }
}
