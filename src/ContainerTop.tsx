import Card from "./Card";
import FBCard from "./FBCard";

function ContainerTop() {

    return (

        <div>

            <section className="containerTop" style={{ height: "auto ", width: "100%", paddingTop: "7%" }} >
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <Card />

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <FBCard />
                    </div>
                </div>
            </section>

        </div>
    )


}

export default ContainerTop;