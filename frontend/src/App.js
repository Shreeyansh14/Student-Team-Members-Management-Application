import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddMemberPage from './components/AddMemberPage';
import ViewMembersPage from './components/ViewMembersPage';
import MemberDetailsPage from './components/MemberDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddMemberPage />} />
        <Route path="/view" element={<ViewMembersPage />} />
        <Route path="/member/:id" element={<MemberDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;