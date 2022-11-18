import { AboutUs } from "../../PageObjects/Homepage/TC_004 AboutUs_Page";
import { HomePage } from "../../PageObjects/Homepage/TC_001 Home_Page";

const homepage = new HomePage();

describe("Verify the 'Om Oss' menu at Navbar", () => {
  const aboutUs = new AboutUs();

  before(() => {
    cy.openUrl();
  });

  it("Verify the 'Om Oss' menu at Navbar", () => {
    aboutUs.verifyAboutUs("Om Oss");
  });

  it("Verify the URL", () => {
    homepage.verify_Url("https://mooleker.moocommerce.no/om-oss/");
  });
});
