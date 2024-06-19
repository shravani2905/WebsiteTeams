import React from 'react';
import './MC.css';
import { useParams } from 'react-router-dom';
const students = [
  { id: 1, name: 'Mr. Yahwanth Sabbithi', rollNo: '19071A0552', position: 'Chairman', year: '2022-2023' },
  { id: 2, name: 'Mr. Praveen Kollipara', rollNo: '19071A0581', position: 'General Secretary', year: '2022-2023' },
  { id: 3, name: 'Ms. Vaishnavi Sunkara', rollNo: '19071A0556', position: 'Treasurer', year: '2022-2023' },
  { id: 4, name: 'Ms. Sushma Kunchala', rollNo: '19071A0585', position: 'President', year: '2022-2023' },
  { id: 5, name: 'Mr. Sushanth Manishetty', rollNo: '19071A0593', position: 'Director', year: '2022-2023' },
  { id: 6, name: 'Ms. Sruthi Damera', rollNo: '19071A0513', position: 'Designing-Head', year: '2022-2023' },
  { id: 7, name: 'Ms. Sunayana Koora', rollNo: '19071A0531', position: 'Designing-Head', year: '2022-2023' },
  { id: 8, name: 'Ms. Niharika Parsi', rollNo: '19071A0543', position: 'Technical-Head', year: '2022-2023' },
  { id: 9, name: 'Ms. Meghana Gogi', rollNo: '19071A0595', position: 'Technical-Head', year: '2022-2023' },
  { id: 10, name: 'Mr. Vardhan Nunemuntala', rollNo: '19071A0541', position: 'Technical-Head', year: '2022-2023' },
  { id: 11, name: 'Ms. Divya sree', rollNo: '19071A05N9', position: 'Non-Technical Head', year: '2022-2023' },
  { id: 12, name: 'Mr. Ravi Varma Chunchu', rollNo: '19071A0568', position: 'Non-Technical Head', year: '2022-2023' },
  { id: 13, name: 'Ms. Meenakshi Voorukonda', rollNo: '19071A05B8', position: 'Creative-Head', year: '2022-2023' },
  { id: 14, name: 'Ms. Sofia Ameena', rollNo: '19071A05Q3', position: 'Creative-Head', year: '2022-2023' },
  { id: 15, name: 'Ms. Shreshta Nadipelli', rollNo: '19071A05N6', position: 'Creative-Head', year: '2022-2023' },
  { id: 16, name: 'Ms. Sharanya Lishetti', rollNo: '19071A05M9', position: 'Event-Organizer', year: '2022-2023' },
  { id: 17, name: 'Mr. Harsha Chunduri', rollNo: '19071A0569', position: 'Event-Organizer', year: '2022-2023' },
  { id: 18, name: 'Mr. Varun Mahankali', rollNo: '19071A0591', position: 'Event Coverage Coordinator', year: '2022-2023' },
  { id: 19, name: 'Mr. Jeevan Kumar', rollNo: '19071A05A0', position: 'Event Coverage Coordinator', year: '2022-2023' },
  { id: 20, name: 'Ms. Yashaswini Surepally', rollNo: '19071A05Q5', position: 'Public Relations Coordinator', year: '2022-2023' },
  { id: 21, name: 'Ms. Neelima Kodedala', rollNo: '19071A0539', position: 'Public Relations Coordinator', year: '2022-2023' },
  { id: 22, name: 'Ms. Sree Chandana', rollNo: '19071A05Q0', position: 'Public Relations Coordinator', year: '2022-2023' },


  { id: 1, name: 'Bathini Veerasai', rollNo: '18071A05C7', year: '2021-2022', position: 'Chairman' },
  { id: 2, name: 'Vanguru Sravan Kumar Reddy', rollNo: '18071A05H5', year: '2021-2022', position: 'General Secretary' },
  { id: 3, name: 'Vaishnavi Yalamareddy', rollNo: '18071A05B6', year: '2021-2022', position: 'Treasurer' },
  { id: 4, name: 'Indu Gurrala', rollNo: '18071A05M1', year: '2021-2022', position: 'President' },
  { id: 7, name: 'Rahul Thakur', rollNo: '18071A05G7', year: '2021-2022', position: 'Technical Head' },
  { id: 8, name: 'Bonagiri Varshini', rollNo: '18071A05D0', year: '2021-2022', position: 'Designing Head' },
  { id: 9, name: 'P Madhuri', rollNo: '18071A0589', year: '2021-2022', position: 'Event Organizer' },
  { id: 10, name: 'D B V Manikanta', rollNo: '18071A05D8', year: '2021-2022', position: 'Non-Technical Head' },
  { id: 11, name: 'M Sreeveda', rollNo: '18071A05B0', year: '2021-2022', position: 'Non-Technical Head' },
  { id: 12, name: 'Vaddepalli Meghana', rollNo: '18071A05H3', year: '2021-2022', position: 'Event Organizer' },
  { id: 13, name: 'Chaturvedula Pranavi', rollNo: '18071A05P4', year: '2021-2022', position: 'Event Organizer' },
  { id: 14, name: 'Kemisetti Srujan', rollNo: '18071A05E6', year: '2021-2022', position: 'Event Coverage Co-Ordinator' },
  { id: 15, name: 'Akshaya Jadav', rollNo: '18071A0579', year: '2021-2022', position: 'Public Relations Co-Ordinator' },
  { id: 16, name: 'G Vaishnavi', rollNo: '18071A05K7', year: '2021-2022', position: 'Public Relations Co-Ordinator' }
,



  { id: 1, name: 'Thiruveedula Geethika', rollNo: '17071A05B4', year: '2020-2021', position: 'Chair Person' },
  { id: 2, name: 'Kurapati Surendra', rollNo: '17071A05K0', year: '2020-2021', position: 'General Secretary' },
  { id: 3, name: 'Karadi Prathyusha', rollNo: '17071A05J9', year: '2020-2021', position: 'Treasurer' },
  { id: 4, name: 'Kotagiri Koushik', rollNo: '17071A05K8', year: '2020-2021', position: 'President' },
  { id: 5, name: 'Pulluri Vineeth', rollNo: '17071A05A9', year: '2020-2021', position: 'Director' },
  { id: 6, name: 'Ganta Varshith Reddy', rollNo: '17071A05J5', year: '2020-2021', position: 'Technical Head' },
  { id: 7, name: 'Snigdha Gogineni', rollNo: '17071A0584', year: '2020-2021', position: 'Designing Head' },
  { id: 8, name: 'Durisetti Srinikil', rollNo: '17071A0580', year: '2020-2021', position: 'Designing Head' },
  { id: 9, name: 'Varun Reddy', rollNo: '17071A05M0', year: '2020-2021', position: 'Non-Technical Head' },
  { id: 10, name: 'Nayudu Sai Kiran Chowdary', rollNo: '17071A05L9', year: '2020-2021', position: 'Non-Technical Head' },
  { id: 11, name: 'Ravutla Sarayu', rollNo: '17071A05M5', year: '2020-2021', position: 'Event Organizer' },
  { id: 12, name: 'Yendluri Hari Chandana', rollNo: '17071A05O0', year: '2020-2021', position: 'Event Organizer' },
  { id: 13, name: 'Chepuri SaiTeja', rollNo: '17071A0510', year: '2020-2021', position: 'External Event Organizer' },
  { id: 14, name: 'Bhosle Snigdha', rollNo: '17071A0508', year: '2020-2021', position: 'External Event Organizer' },
  { id: 15, name: 'Marpally Sandeep Kumar', rollNo: '17071A05L5', year: '2020-2021', position: 'Event Coverage Coordinator' },
  { id: 16, name: 'Attipatla Krishna Teja', rollNo: '17071A0507', year: '2020-2021', position: 'Event Coverage Coordinator' },
  { id: 17, name: 'Ganji Manisha', rollNo: '17071A0519', year: '2020-2021', position: 'Extern Coordinator' },
  { id: 18, name: 'Madishetty Deepak', rollNo: '17071A0536', year: '2020-2021', position: 'Public Relation Coordinator' },
  { id: 19, name: 'Jami Vineetha', rollNo: '17071A0522', year: '2020-2021', position: 'Public Relation Coordinator' }
,




{ id: 1, name: 'Thiruveedula Geethika', rollNo: '17071A05B4', year: '2019-2020', position: 'Chair Person' },
  { id: 2, name: 'Kurapati Surendra', rollNo: '17071A05K0', year: '2019-2020', position: 'General Secretary' },
  { id: 3, name: 'Karadi Prathyusha', rollNo: '17071A05J9', year: '2019-2020', position: 'Treasurer' },
  { id: 4, name: 'Kotagiri Koushik', rollNo: '17071A05K8', year: '2019-2020', position: 'President' },
  { id: 5, name: 'Pulluri Vineeth', rollNo: '17071A05A9', year: '2019-2020', position: 'Director' },
  { id: 6, name: 'Ganta Varshith Reddy', rollNo: '17071A05J5', year: '2019-2020', position: 'Technical Head' },
  { id: 7, name: 'Snigdha Gogineni', rollNo: '17071A0584', year: '2019-2020', position: 'Designing Head' },
  { id: 8, name: 'Durisetti Srinikil', rollNo: '17071A0580', year: '2019-2020', position: 'Designing Head' },
  { id: 9, name: 'Varun Reddy', rollNo: '17071A05M0', year: '2019-2020', position: 'Non-Technical Head' },
  { id: 10, name: 'Nayudu Sai Kiran Chowdary', rollNo: '17071A05L9', year: '2019-2020', position: 'Non-Technical Head' },
  { id: 11, name: 'Ravutla Sarayu', rollNo: '17071A05M5', year: '2019-2020', position: 'Event Organizer' },
  { id: 12, name: 'Yendluri Hari Chandana', rollNo: '17071A05O0', year: '2019-2020', position: 'Event Organizer' },
  { id: 13, name: 'Chepuri SaiTeja', rollNo: '17071A0510', year: '2019-2020', position: 'External Event Organizer' },
  { id: 14, name: 'Bhosle Snigdha', rollNo: '17071A0508', year: '2019-2020', position: 'External Event Organizer' },
  { id: 15, name: 'Marpally Sandeep Kumar', rollNo: '17071A05L5', year: '2019-2020', position: 'Event Coverage Coordinator' },
  { id: 16, name: 'Attipatla Krishna Teja', rollNo: '17071A0507', year: '2019-2020', position: 'Event Coverage Coordinator' },
  { id: 17, name: 'Ganji Manisha', rollNo: '17071A0519', year: '2019-2020', position: 'Extern Coordinator' },
  { id: 18, name: 'Madishetty Deepak', rollNo: '17071A0536', year: '2019-2020', position: 'Public Relation Coordinator' },
  { id: 19, name: 'Jami Vineetha', rollNo: '17071A0522', year: '2019-2020', position: 'Public Relation Coordinator' }
,


  { id: 1, name: 'K Harsha', rollNo: '15071A0580', year: '2018-2019', position: 'Chairman' },
  { id: 2, name: 'I Pranav Souri', rollNo: '15071A05D8', year: '2018-2019', position: 'General Secretary' },
  { id: 3, name: 'S Bhavishya', rollNo: '15071A05B4', year: '2018-2019', position: 'Treasurer' },
  { id: 4, name: 'Hamsini P', rollNo: '15071A05G6', year: '2018-2019', position: 'President' },
  { id: 5, name: 'Chaitanya M', rollNo: '15071A0592', year: '2018-2019', position: 'Chief Event Organizer' },
  { id: 6, name: 'L Sushma', rollNo: '15071A05M6', year: '2018-2019', position: 'V Mug Chair Person' },
  { id: 7, name: 'S Nishnath', rollNo: '15071A0548', year: '2018-2019', position: 'Director' },
  { id: 8, name: 'P Venkat', rollNo: '15071A05N5', year: '2018-2019', position: 'Technical Head' },
  { id: 9, name: 'G Divya', rollNo: '15071A05D7', year: '2018-2019', position: 'Non-Technical Head' },
  { id: 10, name: 'G Ravali', rollNo: '15071A05D6', year: '2018-2019', position: 'Non-Technical Head' },
  { id: 11, name: 'Shiek Mujahed', rollNo: '15071A05B1', year: '2018-2019', position: 'Event Organizer' },
  { id: 12, name: 'T Kavya', rollNo: '15071A05M8', year: '2018-2019', position: 'Event Organizer' },
  { id: 13, name: 'Lokeshwar N', rollNo: '15071A05G3', year: '2018-2019', position: 'Chief Coverage Head' },
  { id: 14, name: 'S Amulya', rollNo: '15071A05B3', year: '2018-2019', position: 'Extern Coordinator' }
];



        
const AC = () => {
  const { year } = useParams();
  const filteredStudents = students.filter(student => student.year === year);
  return (
    <div className="container">
      <h2 className="text-center">Managing Committee {year}</h2>
      <div className="table-container">
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
    </div>
  );
};

export default AC;