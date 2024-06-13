import React from 'react';
import { Link } from 'react-router-dom';
import "./Committee.css";

const Committee = () => {
  const years = ['2023-2024', '2022-2023', '2021-2022', '2020-2021', '2019-2020', '2018-2019', '2017-2018', '2016-2017'];

  return (
    <div>
      <div className="committee-container">
        {years.map(year => (
          <div key={year} className="committee-card">
            <div className="committee-card-body">
              <h5 className="committee-card-title">{year}</h5>
              <div className="committee-card-options">
                <Link to={`/committee/${year === '2023-2024' ? 'actioncommittee' : 'action'}/${year}`}>
                  <button className="btn btn-secondary">Action Committee</button>
                </Link>
                <Link to={`/committee/${year === '2023-2024' ? 'managingcommittee' : 'managing'}/${year}`}>
                  <button className="btn btn-secondary">Managing Committee</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committee;
