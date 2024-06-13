import React from 'react';
import './MainPage.css';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div className="maincontainer py-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card main-card" data-glow>
            <div className="main-body card-body text-center">
              <h2 className="main-card-title">Faculty Coordinators</h2>
              <p className="main-card-text">Meet our experienced faculty coordinators.</p>
              <Link to="faculty" className="btn btn-primary main-card-link">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card main-card" data-glow>
            <div className="card-body main-body text-center">
              <h2 className="main-card-title">Committee Members</h2>
              <p className="main-card-text">Get to know our dedicated committee members.</p>
              <Link to="committee" className="btn btn-primary main-card-link">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;



