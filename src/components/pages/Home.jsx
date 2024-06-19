import React from "react";
import backgroundImageUrl from "./images/image1.jpg";
import coverImage from "./images/cover3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faForward, faCircle, faBackward } from '@fortawesome/free-solid-svg-icons'; // Importing both solid and regular icons

import "./Home.css";

const HomePage = () => {
  const backgroundImage = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={backgroundImage}>
      <div class="cover">
            <div class="subcover">
              {/* Content for the subcover div */}
            </div>
            <div class="cover-image">
            <img src={coverImage} width="200" height="200" /> 
            </div>
            <div class="text">
              <h1>Beyond Bollywood</h1>
              <h2>Arjit Singh</h2>
        
              <div className="line">
              <div class="number">
                <h3>0:45</h3>
                <h4>3:24</h4>
              
                <FontAwesomeIcon icon={faCircle} /></div>
              </div>
              
    
              <div className="player">
                <FontAwesomeIcon icon={faPlay} />
              </div>

              <div class="forward">
              <FontAwesomeIcon icon={faForward} />
              </div>

              <div class="backward">
                <FontAwesomeIcon icon={faBackward} />
              </div>
              
              
      </div>
      
      </div>
      <div className="context">
        <h5> Without <font> Music life </font> <br/> Would be a <font> Mistake</font></h5>
      </div>
</div>

  );
};

export default HomePage;