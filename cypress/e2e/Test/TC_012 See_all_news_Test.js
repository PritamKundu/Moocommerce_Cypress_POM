import { SeeAllNews } from "../../PageObjects/Pages/TC_012 See_all_news_Page";

describe("Verify the 'Se alle nyheter' button ", () => {
  const see_all_news = new SeeAllNews();

  before(() => {
    cy.openUrl();
  });

  it("Verify the 'Se alle nyheter' button", () => {
    see_all_news.verifySeeAllNewsButton("3", "Se alle nyheter");
  });
});
