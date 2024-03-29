import React from "react";
import backgroundImageUrl from "./images/image1.jpg";
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
          <img src="./images/cover3.jpg" width="200" height="200" />
        </div>
      </div>
      <div class="text">
    <h1>Beyond Bollywood</h1>
    <h2>Arjit Singh</h2>
  
    <div class="line">
      <i class="fa fa-circle" aria-hidden="true"></i>
  
    </div>
  
    <div class="number">
      <h3>0:45</h3>
      <h4>3:24</h4>
    </div>
  
    <div class="player">
      <i class="fa fa-pause-circle" aria-hidden="true"></i>
    </div>

    <div class="forward">
      <i class="fa fa-forward" aria-hidden="true"></i>
    </div>

    <div class="backward">
      <i class="fa fa-backward" aria-hidden="true"></i>

    </div>
</div></div>
  );
};

export default HomePage;