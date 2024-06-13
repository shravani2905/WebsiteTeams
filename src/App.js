import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RootLayout from './RootLayout/RootLayout';
import Faculty from './Faculty/Faculty';
import Committee from "./Committee/Committee";
import AC from './AC/AC';
import MC from "./MC/MC";
import ActionCommittee from "./ActionCommittee/ActionCommittee";
import ManagingCommittee from "./ManagingCommittee/ManagingCommittee";

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'faculty',
        element: <Faculty />,
      },
      {
        path: 'committee',
        element: <Committee />,
        children: [
          {
            path: ':year/action',
            element: <AC />,
          },
          {
            path: ':year/managing',
            element: <MC />,
          },
        ]
      },
    ],
  },
  {
    path: '/committee/actioncommittee/:year',
    element: <ActionCommittee />,
  },
  {
    path: '/committee/managingcommittee/:year',
    element: <ManagingCommittee />,
  },
];

const browserRouter = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={browserRouter} />
  );
}

export default App;
