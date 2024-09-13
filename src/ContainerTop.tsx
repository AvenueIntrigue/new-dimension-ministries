import Card from "./Card";


function ContainerTop() {

    return (

        <div>

            <section className="containerTop" style={{ height: "auto ", width: "100%", paddingTop: "7%" }} >
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <Card
                        
                        iframeUrl="https://www.youtube.com/embed/lo0jNM7ov4c?si=NisSWZBd9Se4tTMA" iframeTitle="YouTube Videos" cardTitle="YouTube Videos" linkHref="https://www.youtube.com/channel/UC1_F_2fEjhKRfHfSXQSJgaw"/>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <Card iframeUrl="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fernest.washington.927%2Fvideos%2F845487091016836%2F&show_text=false&width=267&t=0" iframeTitle="Latest Facebook Videos"  cardTitle="Latest Facebook Videos" linkHref="https://www.facebook.com/ernest.washington.927" />
                    </div>
                </div>
            </section>

        </div>
    )


}

export default ContainerTop;