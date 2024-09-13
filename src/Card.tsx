import React from "react";
import Button from "./Button";
import './Card.css'



type CardProps = {


  iframeUrl: string;
  iframeTitle: string;
  cardTitle: string;
  linkHref: string;

}


const Card: React.FC<CardProps> = ({iframeUrl, iframeTitle, cardTitle, linkHref}) => {





  return (

    <div className="card justify-center">

      

      <div className="card-body">
      <div className="ratio">
        <iframe  width="100%" height="100%" src={iframeUrl} title={iframeTitle} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
        <h2 className="card-title">{cardTitle}</h2>
        <p className="card-text">Tune-In Daily for the latest sermons, shorts, & more! </p>
        <a href={linkHref} target="blank">
          <Button name="WATCH MORE HERE!"></Button>
        </a>
      </div>






    </div>






  )
}

export default Card;