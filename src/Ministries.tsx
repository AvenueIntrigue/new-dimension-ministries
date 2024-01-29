
import ministriesIMG from "./assets/Church-Icon.png"
import bibleIMG from "./assets/Bible-Icon.png"

function Ministries() {

    return (
        <div id="ministries" style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
            <section className="ministries-section">
                <div className="ministries-container mx-auto">
                    <div className="ministries-text-container">
                        <h1>Ministries</h1>
                        <br />
                        <br />
                        <img className="ministries-img-container" src={ministriesIMG} alt="Church Icon" />
                        <br />
                        <br />
                        <h2>Sunday Service: </h2>
                        <br />
                        <br />
                        <h3>Join Us In Person or Online for Our Sunday Morning Church Service Happening Every Sunday at 11AM. Our Livestreams are available to watch afterward on both <a className="ministriesLink" href="https://www.youtube.com/@ErnestWashington-sk8mq" target="blank">Youtube</a> and <a className="ministriesLink" href="https://www.facebook.com/PastorApostleErnestWashington/videos" target="blank">Facebook.</a> </h3>
                        <br /><br />
                        <img className="ministries-img-container" src={bibleIMG} alt="Bible Icon" />
                        <br />
                        <br />
                        <h2>Bible Study & Prayer: </h2>
                        <br />
                        <br />
                        <h3>Join Us In Person Every Wednesday at 6PM For a Time of Fellowship, Bible-study, & Prayer.</h3>
                        <br /><br />
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Ministries;