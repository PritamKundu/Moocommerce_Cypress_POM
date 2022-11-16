import { ContactUs } from "../../PageObjects/Homepage/TC_003 ContactUs_Page";
import { HomePage } from "../../PageObjects/Homepage/TC_001 Home_Page";

const homepage = new HomePage();

describe("Verify the 'Kontakt oss' menu at Navbar", () => {

    const contactUs = new ContactUs();

    before(() => {
        cy.openUrl()
    })

    it("Verify the 'Kontakt oss' menu at Navbar ", () => {
        contactUs.verifyContactUs('Kontakt oss')
    })

    it("Verify the URL", () => {
        homepage.verify_Url("https://mooleker.moocommerce.no/")
    })
})


