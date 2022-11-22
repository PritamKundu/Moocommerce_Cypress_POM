import { Instagram } from "../../PageObjects/Pages/TC_018 Instagram_Image_Page";
import { Categories } from "../../PageObjects/Pages/TC_011 Category_Page";


describe("Verify the 'Følg MooLeker på Instagram' section", () => {
  const instagram = new Instagram();
  const category = new Categories();

  before(() => {
    cy.openUrl();
  });

  it("Verify the 'Følg MooLeker på Instagram' text is visible", () => {
    category.verifySectionTitle('Følg MooLeker på Instagram');
    instagram.verifyInstagraSubTitle('Følg oss på Instagram for inspirasjon, nyheter, tips og tilbud.');
  });

  it("Verify the header 'Følg MooLeker på Instagram' image is visible", () => {
    instagram.verifyInstagraImage('4')
  });
});
