import React from 'react';
import './ActionCommittee.css';

const people = [
  { id: 1, name: 'KOLLURE GUNA RATHNA', position: 'Vice Chair', rollNo: '21071A0596', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 2, name: 'D SAI ROHITH', position: 'Joint Secretary', rollNo: '21071A7218', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 3, name: 'DEEPTHI VUNNAM', position: 'Joint Treasurer', rollNo: '21071A05C8', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 4, name: 'SAI RAKSHITA NARSINGH', position: 'Vice President', rollNo: '21071A0554', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 5, name: 'I N S KARTIK', position: 'Deputy Director', rollNo: '21071A7227', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 6, name: 'HIMA SAMEERA NANDIGAMA', position: 'Designing Head', rollNo: '21071A6790', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 7, name: 'A V KARTHIKEYA', position: 'Designing Head', rollNo: '21071A7201', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 8, name: 'INDHUSREE RACHURI', position: 'Designing Head', rollNo: '21071A66B8', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 9, name: 'CHINTALA VARUN TEJA', position: 'Designing Head', rollNo: '21071A6213', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 10, name: 'N KAVYA REDDY', position: 'Designing Head', rollNo: '21071A05Q2', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 11, name: 'FOUZIYA BEGUM', position: 'Documentation Head', rollNo: '21071A3217', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 12, name: 'CHANDRA SHEKAR GOLLA', position: 'Documentation Head', rollNo: '21071A0518', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 13, name: 'OMKAARINI SAVARAPU', position: 'Documentation Head', rollNo: '21071A05B6', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 14, name: 'JONNALAGADDA HARIPRIYA', position: 'Technical Head', rollNo: '21071A0591', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 15, name: 'SWAPNIL PODISHETTI', position: 'Technical Head', rollNo: '21071A66G8', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 16, name: 'YARLAGADDA VENKATA BHARGAV', position: 'Technical Head', rollNo: '21071A66K2', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 17, name: 'SRINITHYA VALLEPALLI', position: 'Non Technical Head', rollNo: '21071A05C0', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 18, name: 'DHEERAJ YERRAMASU', position: 'Non Technical Head', rollNo: '21071A05D0', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 19, name: 'MANAS KUMAR PALAVALASA', position: 'Non Technical Head', rollNo: '21071A05R0', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 20, name: 'DIDDI SHRAVYA', position: 'Creative Head', rollNo: '21071A6216', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 21, name: 'T KRISHNA SOWMYA', position: 'Creative Head', rollNo: '21071A6259', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 22, name: 'HARSHITHA TEMBERVENI', position: 'Creative Head', rollNo: '21071A0558', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 23, name: 'SATHWIK TAMMISHETTI', position: 'Event Organizer', rollNo: '21071A6753', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 24, name: 'PAVAN PRANEETHA KUNUKU', position: 'Event Organizer', rollNo: '21071A66F3', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 25, name: 'CHAITANYA TARIGOPULA', position: 'Event Coverage Coordinator', rollNo: '21071A67C1', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 26, name: 'G JYOTHI SWAROOP', position: 'Public Relations Coordinator', rollNo: '21071A6622', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
  { id: 27, name: 'NEHA GURRAM', position: 'Public Relations Coordinator', rollNo: '21071A05Q7', photo: 'https://via.placeholder.com/200', year: '2023-2024' },
];
function App() {
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

export default App;
