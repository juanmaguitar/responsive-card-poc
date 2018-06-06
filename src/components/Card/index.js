import React from "react";

import "./styles.css";

const Card = () => (
  <div className="Card">
    <div className="Card-media">
      <img
        className="Card-media-image"
        alt="Nice view"
        src="https://picsum.photos/300?image=980"
      />
    </div>
    <div className="Card-content">
      <h2>Trip to the mountain</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  </div>
);

export default Card;
