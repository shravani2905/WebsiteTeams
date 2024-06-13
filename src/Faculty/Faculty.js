import React from 'react';
import './Faculty.css';

const Faculty = () => {
  const facultyMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Professor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec feugiat justo. Ut posuere tempor magna at consequat.',
      image: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Associate Professor',
      description: 'Fusce auctor ligula in lectus mollis, nec bibendum mi semper. Aliquam erat volutpat. Sed eget lacus finibus, ultricies lorem id, tempor leo.',
      image: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
    },
    {
      id: 3,
      name: 'David Johnson',
      position: 'Assistant Professor',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum efficitur, sapien nec blandit vestibulum.',
      image: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
    },
  ];

  return (
    <div>
      <h2 className='text-center'>Faculty Coordinators</h2>
      <div className="faculty-container">
        <div className="faculty-grid">
          {facultyMembers.map((member) => (
            <div key={member.id} className="faculty-card">
              <div className="faculty-card-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="faculty-card-body">
                <h5 className="faculty-card-title">{member.name}</h5>
                <h6 className="faculty-card-position">{member.position}</h6>
                <p className="faculty-card-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
