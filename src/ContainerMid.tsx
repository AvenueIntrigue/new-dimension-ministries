import Carousel from "./Carousel";
import About from "./About";

function ContainerMid() {

    return (
        <div className="row containerMid">

            <div className="col-lg-6 col-md-6 col-sm-12">
                <Carousel />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <About />
            </div>
        </div>
    );
}

export default ContainerMid;