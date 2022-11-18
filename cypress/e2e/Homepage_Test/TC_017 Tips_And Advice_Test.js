import { TipsAndDevice } from "../../PageObjects/Homepage/TC_017 Tips_And Advice_Page";

describe("Check the 'Tips og Råd' sction", () => {
  const tips_advice = new TipsAndDevice();

  before(() => {
    cy.openUrl();
  });

  it("Check the 'Tips og Råd' sction title name", () => {
    tips_advice.verifyTipsAndAdviceTitle("Tips og Råd");
  });

  it("Check the blog image & title name", () => {
    tips_advice.verifyBlogImage(
      "3",
      "\nSminke for moden hud: tips & triks\n"
    );
  });

  it("Check the blog description", () => {
    tips_advice.verifyBlogDescription();
  });

  it("Check the blog previous button", () => {
    tips_advice.verifyPreviousButton();
  });

  it("Check the blog next button", () => {
    tips_advice.verifyNextButton();
  });

  it("Check the blog comment title", () => {
    tips_advice.verifyBlogCommentTile();
  });

  it("Check the blog comment box", () => {
    tips_advice.verifyBlogCommentBox();
  });

  it("Check the blog name box", () => {
    tips_advice.verifyBlogNameBox("Mike");
  });

  it("Check the blog name box", () => {
    tips_advice.verifyBlogEmailBox("mike@gamil.com");
  });

  it("Check the blog name box", () => {
    tips_advice.verifyBlogWebsiteBox("mike.com");
  });

  it("Check the blog comment check box", () => {
    tips_advice.verifyBlogCommentCheckBox();
  });

  it("Check the blog 'post comment' button", () => {
    tips_advice.verifyBlogPostCommentButton();
  });
});
