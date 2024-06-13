import React from 'react';
import './ManagingCommittee.css';

const people = [
  { id: 1, name: 'P.Sai Saketh', position: 'Chairman', rollNo: '20071A0547', year: '2023-2024', photo: 'path/to/photo1.jpg' },
  { id: 2, name: 'Abhinav Sudhanv', position: 'General Secretary', rollNo: '20071A05C8', year: '2023-2024', photo: 'path/to/photo2.jpg' },
  { id: 3, name: 'Neha Kakarla', position: 'Treasurer', rollNo: '20071A05F9', year: '2023-2024', photo: 'path/to/photo3.jpg' },
  { id: 4, name: 'Reshmitha Uppala', position: 'President', rollNo: '20071A3254', year: '2023-2024', photo: 'path/to/photo4.jpg' },
  { id: 5, name: 'Vishnukanth Varma', position: 'Director', rollNo: '20071A6205', year: '2023-2024', photo: 'path/to/photo5.jpg' },
  { id: 6, name: 'Vinay Vardhan Edulapally', position: 'Superior Designing Head', rollNo: '20071A0574', year: '2023-2024', photo: 'path/to/photo6.jpg' },
  { id: 7, name: 'Rohan Kurella', position: 'Superior Designing Head', rollNo: '20071A6932', year: '2023-2024', photo: 'path/to/photo7.jpg' },
  { id: 8, name: 'Neeha', position: 'Superior Designing Head', rollNo: '20071A0564', year: '2023-2024', photo: 'path/to/photo8.jpg' },
  { id: 9, name: 'Moola Sai Sudha', position: 'Superior Technical Head', rollNo: '20071A05N4', year: '2023-2024', photo: 'path/to/photo9.jpg' },
  { id: 10, name: 'Gunnalle Apurva', position: 'Superior Technical Head', rollNo: '20071A05E2', year: '2023-2024', photo: 'path/to/photo10.jpg' },
  { id: 11, name: 'Basuthkar Likhita', position: 'Superior Technical Head', rollNo: '20071A05C6', year: '2023-2024', photo: 'path/to/photo11.jpg' },
  { id: 12, name: 'Rutvik Reddy', position: 'Superior Non-Technical Head', rollNo: '20071A0582', year: '2023-2024', photo: 'path/to/photo12.jpg' },
  { id: 13, name: 'Sandeep Korani', position: 'Superior Non-Technical Head', rollNo: '20071A3227', year: '2023-2024', photo: 'path/to/photo13.jpg' },
  { id: 14, name: 'Shaik Afreen', position: 'Superior Non-Technical Head', rollNo: '20071A3246', year: '2023-2024', photo: 'path/to/photo14.jpg' },
  { id: 15, name: 'Shaik Sabeeha Kouser', position: 'Superior Creative Head', rollNo: '20071A05Q0', year: '2023-2024', photo: 'path/to/photo15.jpg' },
  { id: 16, name: 'Sure Pravalika', position: 'Superior Creative Head', rollNo: '20071A05Q4', year: '2023-2024', photo: 'path/to/photo16.jpg' },
  { id: 17, name: 'Srirangam Sreeja', position: 'Superior Creative Head', rollNo: '20071A05Q2', year: '2023-2024', photo: 'path/to/photo17.jpg' },
  { id: 18, name: 'M.Keerthi', position: 'Superior Event Organiser', rollNo: '20071A3228', year: '2023-2024', photo: 'path/to/photo18.jpg' },
  { id: 19, name: 'Monika Desireddy', position: 'Superior Event Organiser', rollNo: '20071A05D3', year: '2023-2024', photo: 'path/to/photo19.jpg' },
  { id: 20, name: 'Pallavi Narra', position: 'Superior Event Organiser', rollNo: '20071A05F8', year: '2023-2024', photo: 'path/to/photo20.jpg' },
  { id: 21, name: 'Jyothirmai', position: 'Superior Public Relations Co-ordinator', rollNo: '20071A05C1', year: '2023-2024', photo: 'path/to/photo21.jpg' },
  { id: 22, name: 'Rushika Arvapalli', position: 'Superior Public Relations Co-ordinator', rollNo: '20071A3241', year: '2023-2024', photo: 'path/to/photo22.jpg' },
  { id: 23, name: 'Palla Navya Sree', position: 'Superior Public Relations Co-ordinator', rollNo: '20071A3235', year: '2023-2024', photo: 'path/to/photo23.jpg' }
];

function ManagingCommittee() {
  return (
    <div className="team-card-container card-container">
      {people.map(person => (
        <div key={person.id} className="team-card card">
          <img src={person.photo} alt={`${person.name}`} />
          <div className="team-card-content card-content">
            <h3>{person.name}</h3>
            <p>{person.position}</p>
            <p className="roll-no">{person.rollNo}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ManagingCommittee;
