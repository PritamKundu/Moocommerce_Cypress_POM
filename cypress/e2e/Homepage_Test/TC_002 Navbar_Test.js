import { Navbar } from "../../PageObjects/Homepage/TC_002 Navbar";

describe("Check the Homepage", ()=>{

    const navbar = new Navbar();

    before(()=>{
        cy.openUrl()
    })


    it("Verify the navbar content 'Gratis frakt over 999 kr' ", ()=>{
            navbar.navBar('Gratis frakt over 999 kr')
        })


    it("Verify the navbar content 'Raske leveranser' ", ()=>{
            navbar.navBar('Raske leveranser')
        })


    it("Verify the navbar content '30 dagers åpne kjøp' ", ()=>{
            navbar.navBar('30 dagers åpne kjøp')
        })
    })


