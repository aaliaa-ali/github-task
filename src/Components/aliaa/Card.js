import React from "react";
import "./Card.css";

function Card() {
  return <section className="card-container">
      <div className="card">
          <img src="https://th.bing.com/th/id/R.854641f57cf75ffc863e51a363113667?rik=SxsfmC861%2bBs3A&pid=ImgRaw&r=0" />
          <div className="body">
             <p>Name:<span>Aliaa Ali</span></p>
             <p>Age:<span>26</span></p>

          </div>
      </div>
  </section>;
}

export default Card;
