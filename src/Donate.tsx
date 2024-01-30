import DonateQR from "./assets/$sewhope72.png"
import Check from "./assets/PaybyCheck.png"

function Donate() {

    return (
        <section className="donate-section">
            <div className="donate-container mx-auto">
                <div className="donate-text-container">
                    <h1>Give</h1>
                    <br />
                    <p><h2>To Donate: </h2>
                        <br />
                        <br />
                        Donations can be made electronically via Cash App.
                        <br /><br />
                        Step 1: Open Cash App, and select the scan icon in the top left corner.
                        <br /><br />
                        Step 2: Scan the QR Code below, or search for <i>$Sewhope72</i> within Cash App.
                        <br />
                        <br />
                        <img className="donate-img-container" src={DonateQR} alt="Donate QR Code" />
                        <br />
                        <br />
                        Step 3: Add a note if you wish, enter an amount, and tap the "Pay" button. </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <img className="donate-img-container" src={Check} alt="Check Image" />
                    <br />
                    <br />
                    <h2>Checks or Money-Orders can be made out to:<br /><br /> <i>Ernest Washington</i><br /><br /> & sent to<br /><br /><i>New Dimensions Ministries</i><br /><br /><i>920 South 23 Street</i><br /><i>Southbend, IN 46615</i> </h2>


                    <br /> <br />
                    Thanks & God Bless!
                    <br /><br />
                    <p> <i>"Give, and it will be given to you. Good measure, pressed down, shaken together, running over, will be put into your lap. For with the measure you use it will be measured back to you."</i> <br /><br /> Luke 6:38 ESV</p>
                </div>

            </div>
        </section>
    )

}

export default Donate;