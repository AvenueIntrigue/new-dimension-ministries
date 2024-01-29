import ContainerTop from "./ContainerTop";
import ContainerMid from "./ContainerMid";
import Typewriter from "./Typewriter";
import Ministries from "./Ministries";

function Home() {



    return (

        <div className="Home">
            <div>
                <Typewriter />
                <ContainerTop />
                <Ministries />
                <ContainerMid />
            </div>
        </div>
    )
}
export default Home;
