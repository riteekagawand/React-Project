import React from 'react';
import "./Album.css"; 
import sm from "./images/sm.jpg";
import am from "./images/am.jpg";
import as from "./images/as.jpg";
import ar from "./images/ar.jpg";
import sn from "./images/sn.jpg";
// Import your CSS file if you have one

const Albums = () => {
  return (
    <div>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;Artists....</h1>

      <div className="cover6">
        <div className="subcover6"></div>
        <div className="cover-image6">
          <a href="https://open.spotify.com/album/5t4ZtKPDT4r1ZPobRGIAyo">
            <img src={sm} width="200" height="200" alt="Album Cover" />
          </a>
          </div>
          <div className="text6">
            <h1>Shankar</h1><h1></h1>
            <h1>Mahadevan</h1>
          </div>
        
      </div>

      <div className="cover2">
        <div className="subcover2"></div>
        <div className="cover-image2">
          <a href="https://open.spotify.com/album/1WwkojG9sjMSrFVz4D51W0">
            <img src={as} width="200" height="200" alt="Album Cover" />
          </a>
          <div className="text2">
            <h1>Arijit Singh</h1>
          </div>
        </div>
      </div>

      <div className="cover3">
        <div className="subcover3"></div>
        <div className="cover-image3">
          <a href="https://open.spotify.com/artist/1mYsTxnqsietFxj1OgoGbG">
            <img src={ar} width="200" height="200" alt="Album Cover" />
          </a>
          <div className="text3">
            <h1>A.R. Rahman</h1>
          </div>
        </div>
      </div>

      <div className="cover4">
        <div className="subcover4"></div>
        <div className="cover-image4">
          <a href="https://open.spotify.com/album/0TKg5tmAFIIC6iytdXXiM2">
            <img src={am} width="200" height="200" alt="Album Cover" />
          </a>
          <div className="text4">
            <h1>Armaan Malik</h1>
          </div>
        </div>
      </div>

      <div className="cover5">
        <div className="subcover5"></div>
        <div className="cover-image5">
          <a href="https://open.spotify.com/album/6t6xffp18j87wZRLXOwHa7">
            <img src={sn} width="200" height="200" alt="Album Cover" />
          </a>
          <div className="text5">
            <h1>Sonu Nigam</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Albums;
