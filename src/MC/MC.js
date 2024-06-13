import React from 'react';
import './MC.css';
import { useParams } from 'react-router-dom';

const students = [
  

{ id: 1, name: 'P.Sai Saketh', position: 'Event Coverage Coordinator', rollNo: '20071A0547', year: '2023-2024' },
{ id: 2, name: 'Abhinav Sudhanv', position: 'External Event Organiser', rollNo: '20071A05C8', year: '2023-2024' },
{ id: 3, name: 'Neha Kakarla', position: 'Vice Chair', rollNo: '20071A05F9', year: '2023-2024' },
{ id: 4, name: 'Reshmitha Uppala', position: 'Deputy Director', rollNo: '20071A3254', year: '2023-2024' },
{ id: 5, name: 'Vishnukanth Varma', position: 'Event Organiser', rollNo: '20071A6205', year: '2023-2024' },
{ id: 6, name: 'Sruthi Jakke', position: 'Excom Head', rollNo: '20071A6219', year: '2023-2024' },
{ id: 7, name: 'Vinay Vardhan Edulapally', position: 'Event Organiser', rollNo: '20071A0574', year: '2023-2024' },
{ id: 8, name: 'Rohan Kurella', position: 'Joint Event Coordinator', rollNo: '20071A6932', year: '2023-2024' },
{ id: 9, name: 'Neeha', position: 'Joint Treasurer', rollNo: '20071A0564', year: '2023-2024' },
{ id: 10, name: 'Moola Sai Sudha', position: 'Joint Secretary', rollNo: '20071A05N4', year: '2023-2024' },
{ id: 11, name: 'Gunnalle Apurva', position: 'Vice President', rollNo: '20071A05E2', year: '2023-2024' },
{ id: 12, name: 'Basuthkar Likhita', position: 'Technical Head', rollNo: '20071A05C6', year: '2023-2024' },
{ id: 13, name: 'K Ananda Rutvik Reddy', position: 'Non-Technical Head', rollNo: '20071A0582', year: '2023-2024' },
{ id: 14, name: 'Sandeep Korani', position: 'Joint Event Coordinator', rollNo: '20071A3227', year: '2023-2024' },
{ id: 15, name: 'Shaik Afreen', position: 'External Event Organiser', rollNo: '20071A3246', year: '2023-2024' },
{ id: 16, name: 'Shaik Sabeeha Kouser', position: 'Event Organiser', rollNo: '20071A05Q0', year: '2023-2024' },
{ id: 17, name: 'Sure Pravalika', position: 'Event Coverage Coordinator', rollNo: '20071A05Q4', year: '2023-2024' },
{ id: 18, name: 'Srirangam Sreeja', position: 'External Event Organiser', rollNo: '20071A05Q2', year: '2023-2024' },
{ id: 19, name: 'M.Keerthi', position: 'Event Organiser', rollNo: '20071A3228', year: '2023-2024' },
{ id: 20, name: 'Monika Desireddy', position: 'Deputy Director', rollNo: '20071A05D3', year: '2023-2024' },
{ id: 21, name: 'Cherukoori Komali', position: 'Technical Head', rollNo: '20071A05D1', year: '2023-2024' },
{ id: 22, name: 'Pallavi Narra', position: 'Vice Chair', rollNo: '20071A05F8', year: '2023-2024' },
{ id: 23, name: 'Jyothirmai', position: 'Event Coverage Coordinator', rollNo: '20071A05C1', year: '2023-2024' },
{ id: 24, name: 'Rushika Arvapalli', position: 'Joint Secretary', rollNo: '20071A3241', year: '2023-2024' },
{ id: 25, name: 'Palla Navya Sree', position: 'Excom Head', rollNo: '20071A3235', year: '2023-2024' }

];

const AC = () => {
  const { year } = useParams();
  const filteredStudents = students.filter(student => student.year === year);

  return (
    <div>
      <h2 className="text-center">Committee Members {year}</h2>
      <table className="student-table">
        <thead>
          <tr>
         
            <th>Name</th>
            <th>Position</th>
            <th>Roll No</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map(student => (
            <tr key={student.id}>
             
              <td>{student.name}</td>
              <td>{student.position}</td>
              <td>{student.rollNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AC;
