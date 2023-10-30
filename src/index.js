import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';

import HomeScreen from './Pages/HomeScreen';
import SingleJobScreen from './Pages/SingleJobScreen';
import AppliedJobsScreen from './Pages/AppliedJobsScreen';
import ProfileScreen from './Pages/ProfileScreen';
import ApplyScreen from './Pages/ApplyScreen';
import CompanyProfileScreen from './Pages/EmployerPages/CompanyProfileScreen';
import AppliedCandidatesScreen from './Pages/EmployerPages/AppliedCandidatesScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/single-job" element={<SingleJobScreen />} />
      <Route path="/applied-jobs" element={<AppliedJobsScreen />} />
      <Route path="/profile" element={<ProfileScreen />} />
      <Route path="/apply" element={<ApplyScreen />} />
      <Route path="/company-profile" element={<CompanyProfileScreen />} />
      <Route path="/applied-candidates" element={<AppliedCandidatesScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
