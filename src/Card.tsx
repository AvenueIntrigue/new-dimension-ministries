import Button from "./Button";



function Card() {





  return (

    <div className="card justify-center">

      <div className="ratio ratio-16x9">
        <iframe style={{ borderRadius: "1%" }} width="100%" height="auto" src="https://www.youtube.com/embed/lo0jNM7ov4c?si=GWITWsYGYfR1jcbV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className="card-body">
        <h2 className="card-title">LATEST YOUTUBE VIDEOS</h2>
        <p className="card-text">Tune-In Daily for the latest sermons, shorts, & more! </p>
        <a href="https://www.youtube.com/@ErnestWashington-sk8mq" target="blank">
          <Button name="WATCH MORE HERE!"></Button>
        </a>
      </div>




    </div>






  )
}

export default Card;