import React from "react";
import './EsraaCard.css'
const EsraaCard = () => {
  return (
    <div>
      <div className="card">
        <img
          style={{ width: "25%", borderRadius: "50%" }}
          src="https://i.pinimg.com/736x/9d/1b/77/9d1b77e2a4468304372aa37692627d2a.jpg"
          alt="profile-img"
        />
        <h3>
          <strong>Name :</strong>Esraa ismail
        </h3>
        <h4>
          <strong>Age :</strong>27
        </h4>
      </div>
    </div>
  );
}

export default EsraaCard;
