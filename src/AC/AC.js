import React from 'react';
import './AC.css';
import { useParams } from 'react-router-dom';
const students = [
  { id: 1, name: 'Mr. P.Sai Saketh', position: 'Vice Chairman', rollNo: '20071A0547', year: '2022-2023' },
  { id: 2, name: 'Mr. Abhinav Sudhanv', position: 'Joint Secretary', rollNo: '20071A05C8', year: '2022-2023' },
  { id: 3, name: 'Ms. Neha Kakarla', position: 'Joint Treasurer', rollNo: '20071A05F9', year: '2022-2023' },
  { id: 4, name: 'Ms. Reshmitha Uppala', position: 'Vice President', rollNo: '20071A3254', year: '2022-2023' },
  { id: 5, name: 'Mr. Vishnukanth Varma', position: 'Deputy Director', rollNo: '20071A6205', year: '2022-2023' },
  { id: 6, name: 'Ms. Sruthi Jakke', position: 'Designing-head', rollNo: '20071A6219', year: '2022-2023' },
  { id: 7, name: 'Mr. Vinay Vardhan Edulapally', position: 'Designing-head', rollNo: '20071A0574', year: '2022-2023' },
  { id: 8, name: 'Mr. Rohan Kurella', position: 'Designing-head', rollNo: '20071A6932', year: '2022-2023' },
  { id: 9, name: 'Ms. Neeha', position: 'Designing-head', rollNo: '20071A0564', year: '2022-2023' },
  { id: 10, name: 'Ms. Moola Sai Sudha', position: 'Technical-head', rollNo: '20071A05N4', year: '2022-2023' },
  { id: 11, name: 'Ms. Gunnalle Apurva', position: 'Technical-head', rollNo: '20071A05E2', year: '2022-2023' },
  { id: 12, name: 'Ms. Basuthkar Likhita', position: 'Technical-head', rollNo: '20071A05C6', year: '2022-2023' },
  { id: 13, name: 'Mr. K Ananda Rutvik Reddy', position: 'Non-technical Head', rollNo: '20071A0582', year: '2022-2023' },
  { id: 14, name: 'Mr. Sandeep Korani', position: 'Non-technical Head', rollNo: '20071A3227', year: '2022-2023' },
  { id: 15, name: 'Ms. Shaik Afreen', position: 'Non-technical Head', rollNo: '20071A3246', year: '2022-2023' },
  { id: 16, name: 'Ms. Shaik Sabeeha Kouser', position: 'Creative-head', rollNo: '20071A05Q0', year: '2022-2023' },
  { id: 17, name: 'Ms. Sure pravalika', position: 'Creative-head', rollNo: '20071A05Q4', year: '2022-2023' },
  { id: 18, name: 'Ms. Srirangam Sreeja', position: 'Creative-head', rollNo: '20071A05Q2', year: '2022-2023' },
  { id: 19, name: 'Ms. M.Keerthi', position: 'Event-Organizer', rollNo: '20071A3228', year: '2022-2023' },
  { id: 20, name: 'Ms. Monika Desireddy', position: 'Event-Organizer', rollNo: '20071A05D3', year: '2022-2023' },
  { id: 21, name: 'Ms. Cherukoori komali', position: 'Event-Organizer', rollNo: '20071A05D1', year: '2022-2023' },
  { id: 22, name: 'Ms. Pallavi Narra', position: 'Event-coverage coordinator', rollNo: '20071A05F8', year: '2022-2023' },
  { id: 23, name: 'Ms. Jyothirmai', position: 'Public relations coordinator', rollNo: '20071A05C1', year: '2022-2023' },
  { id: 24, name: 'Ms. Rushika Arvapalli', position: 'Public relations coordinator', rollNo: '20071A3241', year: '2022-2023' },
  { id: 25, name: 'Ms. Palla Navya Sree', position: 'Public relations coordinator', rollNo: '20071A3235', year: '2022-2023' }
,
{ id: 1, name: 'Yahwanth Sabbithi', position: 'Vice Chair', rollNo: '19071A0552', year: '2021-2022' },
{ id: 2, name: 'Praveen Kollipara', position: 'Joint Secretary', rollNo: '19071A0581', year: '2021-2022' },
{ id: 3, name: 'Vaishnavi Sunkara', position: 'Joint Treasurer', rollNo: '19071A0556', year: '2021-2022' },
{ id: 4, name: 'Sushma Kunchala', position: 'Vice President', rollNo: '19071A0585', year: '2021-2022' },
{ id: 5, name: 'Sushanth Manishetty', position: 'Deputy Director', rollNo: '19071A0593', year: '2021-2022' },
{ id: 6, name: 'Sruthi Damera', position: 'Designing Head', rollNo: '19071A0513', year: '2021-2022' },
{ id: 7, name: 'Sunayana Koora', position: 'Designing Head', rollNo: '19071A0531', year: '2021-2022' },
{ id: 8, name: 'Vardhan Nunemuntala', position: 'Technical Head', rollNo: '19071A0541', year: '2021-2022' },
{ id: 9, name: 'NiharikaParsi', position: 'Technical Head', rollNo: '19071A0543', year: '2021-2022' },
{ id: 10, name: 'MeghanaGogi', position: 'Technical Head', rollNo: '19071A0595', year: '2021-2022' },
{ id: 11, name: 'Divyasree Nemmikanti', position: 'Non-Technical Head', rollNo: '19071A05N9', year: '2021-2022' },
{ id: 12, name: 'Ravi Varma Chunchu', position: 'Non-Technical Head', rollNo: '19071A0568', year: '2021-2022' },
{ id: 13, name: 'Meenakshi Voorukonda', position: 'Creative Head', rollNo: '19071A05B8', year: '2021-2022' },
{ id: 14, name: 'Sofia Ameena', position: 'Creative Head', rollNo: '19071A05Q3', year: '2021-2022' },
{ id: 15, name: 'Shreshta Nadipelli', position: 'Creative Head', rollNo: '19071A05N6', year: '2021-2022' },
{ id: 16, name: 'Sharanya Lishetti', position: 'Event Organizer', rollNo: '19071A05M9', year: '2021-2022' },
{ id: 17, name: 'VinuthaEjjagani', position: 'Event Organizer', rollNo: '19071A05D7', year: '2021-2022' },
{ id: 18, name: 'Harsha Chunduri', position: 'Event Organizer', rollNo: '19071A0569', year: '2021-2022' },
{ id: 19, name: 'Jeevan Kumar', position: 'Event Coverage Co-Ordinator', rollNo: '19071A05A0', year: '2021-2022' },
{ id: 20, name: 'Varun Mahankali', position: 'Event Coverage Co-Ordinator', rollNo: '19071A0591', year: '2021-2022' },
{ id: 21, name: 'Yashaswini Surepally', position: 'Public Relations Co-Ordinator', rollNo: '19071A05Q5', year: '2021-2022' },
{ id: 22, name: 'Neelima Kodedala', position: 'Public Relations Co-Ordinator', rollNo: '19071A0539', year: '2021-2022' },
{ id: 23, name: 'Sree Chandana Salvaji', position: 'Public Relations Co-Ordinator', rollNo: '19071A05Q0', year: '2021-2022' },



{ id: 1, name: 'Bathini Veerasai', position: 'Vice Chair', rollNo: '18071A05C7', year: '2020-2021' },
  { id: 2, name: 'Vanguru Sravan Kumar Reddy', position: 'Joint Secretary', rollNo: '18071A05H5', year: '2020-2021' },
  { id: 3, name: 'Vaishnavi Yalamareddy', position: 'Joint Treasurer', rollNo: '18071A05B6', year: '2020-2021' },
  { id: 4, name: 'Indu Gurrala', position: 'Vice President', rollNo: '18071A05M1', year: '2020-2021' },
  { id: 5, name: 'Harshini Chandrika', position: 'Deputy Director', rollNo: '18071A05K6', year: '2020-2021' },
  { id: 6, name: 'Md Abdul Rab', position: 'Technical Head', rollNo: '18071A0591', year: '2020-2021' },
  { id: 7, name: 'Rahul Thakur', position: 'Technical Head', rollNo: '18071A05G7', year: '2020-2021' },
  { id: 8, name: 'Bonagiri Varshini', position: 'Designing Head', rollNo: '18071A05D0', year: '2020-2021' },
  { id: 9, name: 'P Madhuri', position: 'Designing Head', rollNo: '18071A0589', year: '2020-2021' },
  { id: 10, name: 'D B V Manikanta', position: 'Non-Technical Head', rollNo: '18071A05D8', year: '2020-2021' },
  { id: 11, name: 'M Sreeveda', position: 'Non-Technical Head', rollNo: '18071A05B0', year: '2020-2021' },
  { id: 12, name: 'Vaddepalli Meghana', position: 'Event Organizer', rollNo: '18071A05H3', year: '2020-2021' },
  { id: 13, name: 'Chaturvedula Pranavi', position: 'Event Organizer', rollNo: '18071A05P4', year: '2020-2021' },
  { id: 14, name: 'Kemisetti Srujan', position: 'Event Coverage Co-Ordinator', rollNo: '18071A05E6', year: '2020-2021' },
  { id: 15, name: 'Akshaya Jadav', position: 'Public Relations Co-Ordinator', rollNo: '18071A0579', year: '2020-2021' },
  { id: 16, name: 'G Vaishnavi', position: 'Public Relations Co-Ordinator', rollNo: '18071A05K7', year: '2020-2021' }

,

{ id: 1, name: 'Bathini Veerasai', position: 'Vice Chair', rollNo: '18071A05C7', year: '2019-2020' },
  { id: 2, name: 'Vanguru Sravan Kumar Reddy', position: 'Joint Secretary', rollNo: '18071A05H5', year: '2019-2020' },
  { id: 3, name: 'Vaishnavi Yalamareddy', position: 'Joint Treasurer', rollNo: '18071A05B6', year: '2019-2020' },
  { id: 4, name: 'Indu Gurrala', position: 'Vice President', rollNo: '18071A05M1', year: '2019-2020' },
  { id: 5, name: 'Harshini Chandrika', position: 'Deputy Director', rollNo: '18071A05K6', year: '2019-2020' },
  { id: 6, name: 'Md Abdul Rab', position: 'Technical Head', rollNo: '18071A0591', year: '2019-2020' },
  { id: 7, name: 'Rahul Thakur', position: 'Technical Head', rollNo: '18071A05G7', year: '2019-2020' },
  { id: 8, name: 'Bonagiri Varshini', position: 'Designing Head', rollNo: '18071A05D0', year: '2019-2020' },
  { id: 9, name: 'P Madhuri', position: 'Designing Head', rollNo: '18071A0589', year: '2019-2020' },
  { id: 10, name: 'D B V Manikanta', position: 'Non-Technical Head', rollNo: '18071A05D8', year: '2019-2020' },
  { id: 11, name: 'M Sreeveda', position: 'Non-Technical Head', rollNo: '18071A05B0', year: '2019-2020' },
  { id: 12, name: 'Vaddepalli Meghana', position: 'Event Organizer', rollNo: '18071A05H3', year: '2019-2020' },
  { id: 13, name: 'Chaturvedula Pranavi', position: 'Event Organizer', rollNo: '18071A05P4', year: '2019-2020' },
  { id: 14, name: 'Kemisetti Srujan', position: 'Event Coverage Co-Ordinator', rollNo: '18071A05E6', year: '2019-2020' },
  { id: 15, name: 'Akshaya Jadav', position: 'Public Relations Co-Ordinator', rollNo: '18071A0579', year: '2019-2020' },
  { id: 16, name: 'G Vaishnavi', position: 'Public Relations Co-Ordinator', rollNo: '18071A05K7', year: '2019-2020' }

,



{ id: 1, name: 'Goutam Sai Pathuri', position: 'Vice Chair', rollNo: '16071A05A6', year: '2019-2020' },
  { id: 2, name: 'Sri Vatsa Saketh Kunchakarra', position: 'Joint Secretary', rollNo: '16071A0589', year: '2019-2020' },
  { id: 3, name: 'Vinuthnanetha Anagandula', position: 'Joint Treasurer', rollNo: '16071A0503', year: '2019-2020' },
  { id: 4, name: 'Rahul Manne', position: 'Vice President', rollNo: '16071A0537', year: '2019-2020' },
  { id: 5, name: 'Jaya Prakash Lavdyavath', position: 'Deputy Director', rollNo: '16071A0591', year: '2019-2020' },
  { id: 6, name: 'Abhignya Pachava', position: 'Technical Head', rollNo: '16071A0543', year: '2019-2020' },
  { id: 7, name: 'Naga Prudhvi Kumar Bobba', position: 'Non-Technical Head', rollNo: '16071A0598', year: '2019-2020' },
  { id: 8, name: 'Sahithi Mekala', position: 'Event Organiser', rollNo: '16071A0595', year: '2019-2020' },
  { id: 9, name: 'Poojitha Guntapalli', position: 'Event Organiser', rollNo: '16071A0581', year: '2019-2020' },
  { id: 10, name: 'Vaishnavi Yadlapati', position: 'Excom Head', rollNo: '16071A05C0', year: '2019-2020' },
  { id: 11, name: 'Supraja Vadlamudi', position: 'External Event Organiser', rollNo: '16071A05B7', year: '2019-2020' },
  { id: 12, name: 'Vathsalya Pakalapati', position: 'External Event Organiser', rollNo: '16071A05A2', year: '2019-2020' },
  { id: 13, name: 'Prathyusha Reddy Sama', position: 'Joint Event Coordinator', rollNo: '16071A05M0', year: '2019-2020' },
  { id: 14, name: 'Sai Keerthan Palavarapu', position: 'Event Coverage Coordinator', rollNo: '16071A05A3', year: '2019-2020' },
  { id: 15, name: 'Lokesh Bathula', position: 'Event Coverage Coordinator', rollNo: '16071A0506', year: '2019-2020' }
,


];
const AC = () => {
  const { year } = useParams();
  const filteredStudents = students.filter(student => student.year === year);

  return (
    <div>
      <h2 className="text-center">Action Committee {year}</h2>
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
