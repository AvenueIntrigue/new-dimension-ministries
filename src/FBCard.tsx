
import Button from "./Button";

function FBCard() {



  return (

    <div className="card justify-center">
      <div className="fb-card ratio ratio-16x9 mx-auto">
        <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FPastorApostleErnestWashington%2Fvideos%2F868306023313012%2F&show_text=false&width=560&t=0" width="560" height="314" style={{ border: "none", overflow: "hidden" }} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>
      </div>
      <div className="card-body">
        <h2 className="card-title">LATEST FACEBOOK VIDEOS</h2>
        <p className="card-text">Tune in Daily for the latest sermons, shorts, & more!</p>
        <a href="https://www.facebook.com/PastorApostleErnestWashington/videos" target="blank">
          <Button name="WATCH MORE HERE!" />
        </a>
      </div>




    </div>



  )
}

export default FBCard;