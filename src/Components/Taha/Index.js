import React from "react";
import "./style.css";

function Index() {
  return (
    <section className="taha">
      <div className="taha-card">
        <img src="https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg" alt="user" width={100} />
        <div className="taha-card__body">
          <h5 className="taha-card__body-title">TITLE: Taha Shahat Ebaed</h5>
          <p className="taha-card__body-age">AGE: 27</p>
        </div>
      </div>
    </section>
  );
}

export default Index;
