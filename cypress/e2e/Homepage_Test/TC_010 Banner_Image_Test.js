import { Banner } from "../../PageObjects/Homepage/TC_010 Banner_Image_Page";

describe("Verify All Banner", () => {
  const banner = new Banner();

  before(() => {
    cy.openUrl();
  });

  it("Verify the main banner ", () => {
    banner.verifyBanner("1");
  });

  it("Verify the second helper banner ", () => {
    banner.verifyBanner("2");
    banner.verifyBannerHeader("1");
    banner.verifyButton("1", "Kjøp Nå");
  });

  it("Verify the third helper banner ", () => {
    banner.verifyBanner("3");
    banner.verifyBannerHeader("2");
    banner.verifyButton("2", "Kjøp Nå");
  });
});
