import { Addtocart } from "../../PageObjects/Homepage/TC_007 Addtocart_Icon_Page";

describe("Verify the 'Legg i handlekurv' icon at Navbar", () => {

    const addtocart = new Addtocart();

    before(() => {
        cy.openUrl()
    })

    it("Verify the 'Legg i handlekurv' icon at Navbar", () => {
        addtocart.verifyAddtocartIcon()
    })

})


