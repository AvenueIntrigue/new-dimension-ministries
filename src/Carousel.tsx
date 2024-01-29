import { ImageSlider } from "./ImageSlider"
import image1 from "../src/assets/WashingtonFamily2.jpg"
import image2 from "../src/assets/ApostleEarnestWashingtonGranddaughter.jpg"
import image3 from "../src/assets/NDMCongregation.jpg"

function Carousel() {

    const IMAGES = [
        { url: image1, alt: "Apostle Ernest Washington and Family" },
        { url: image2, alt: "Apostle Ernest Washington and Grand-Daughter" },
        { url: image3, alt: "New Dimension Ministries Congregation" }
    ]

    return (
        <div className="carousel-section">
            <ImageSlider images={IMAGES} />
            <a href="/" className='skip-link' style={{ fontSize: "4rem" }}>Link</a>
        </div>
    )
}

export default Carousel;



