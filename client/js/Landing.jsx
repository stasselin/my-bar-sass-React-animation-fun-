import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="app">
    <div className="landing">
      <div className="landing__line">
        <div className="landing__text-box">
          <h1>
            <span className="landing__heading--secondary">Welcome to</span>
            <span className="landing__heading--primary">My Bar</span>
          </h1>
          <input type="text" placeholder="Search cocktail" />
          <Link to="/search" className="btn btn--white">
            or Browse All
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
