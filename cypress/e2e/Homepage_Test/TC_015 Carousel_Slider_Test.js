import { Banner } from "../../PageObjects/Homepage/TC_010 Banner_Image_Page";
import { CarouselSlider } from "../../PageObjects/Homepage/TC_015 Carousel_Slider_Page";

describe("Check the 'Carousel Slider' section", () => {
  const carousel_slider = new CarouselSlider();
  const banner = new Banner();

  before(() => {
    cy.openUrl();
  });

  it("Verify the carousel slider is visible", () => {
    carousel_slider.verifysliderImage();
  });

  it("Verify the header 'title' is visible", () => {
    carousel_slider.verifysliderTitle("Våre mest populære skjønnhetsprodukter");
  });

  it("Verify the 'Kjøp Nå' button is visible", () => {
    banner.verifyButton("8", "Kjøp Nå");
  });
});
