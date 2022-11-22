import { WishlistIcon } from "../../PageObjects/Pages/TC_006 Wishlist_Icon_Page";

describe("Verify the 'Ønskeliste' icon at Navbar", () => {
  const wishlist = new WishlistIcon();

  before(() => {
    cy.openUrl();
  });

  it("Verify the 'Ønskeliste' icon at Navbar", () => {
    wishlist.verifyWishlistIcon();
  });

  it("Verify the 'Ønskeliste' count at Navbar", () => {
    wishlist.verifyWishlistCount();
  });
});
