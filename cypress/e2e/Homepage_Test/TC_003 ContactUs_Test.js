import { ContactUs } from "../../PageObjects/Homepage/TC_003 ContactUs_Page";

describe("Verify the 'Kontakt oss' menu at Navbar", ()=>{

    const contactUs = new ContactUs();

    before(()=>{
        cy.openUrl()
    })

    it("Verify the 'Kontakt oss' menu at Navbar ", ()=>{
        contactUs.contactUs('Kontakt oss')
        })
    })


