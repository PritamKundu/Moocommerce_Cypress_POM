import { Instagram } from "../../PageObjects/Pages/TC_018 Instagram_Image_Page";
import { Footer } from "../../PageObjects/Pages/TC_020 Footer_Page";
import { Categories } from "../../PageObjects/Pages/TC_011 Category_Page";


describe("Verify the 'Følg MooLeker på Instagram' section", () => {
  const instagram = new Instagram();
  const footer = new Footer();
  const category = new Categories();

  before(() => {
    cy.openUrl();
  });

  it("Verify the footer '1st' block", () => {
    category.verifyCategoriesIcon('6')
    instagram.verifyInstagraSubTitle('Kom innom oss for en passende og en virkelig oppløftende opplevelse!')
    footer.verifyFooter('Butikker', 'Se våre butikker')
  });

  it("Verify the footer '2nd' block", () => {
    category.verifyCategoriesIcon('7')
    instagram.verifyInstagraSubTitle('Ring 21 56 66 11')
    footer.verifyFooter('Telefon', 'Ring 21 56 66 11')
  });

  it("Verify the footer '3rd' block", () => {
    category.verifyCategoriesIcon('8')
    instagram.verifyInstagraSubTitle('Send oss din forespørsel, og vi vil komme tilbake til deg så raskt vi kan.')
    footer.verifyFooter('e-Post', 'Send oss e-post')
  });

  it("Verify the footer '4th' block", () => {
    category.verifyCategoriesIcon('9')
    instagram.verifyInstagraSubTitle('Nettbutikken din bør designes og bygges med brukerne og deres behov i sentrum.')
    footer.verifyFooter('Tips', 'Tips')
  });
  
});
