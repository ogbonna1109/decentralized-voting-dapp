import { BrowserRouter, Route, Routes } from "react-router-dom";

import VoterLayout from "./layouts/voterLayout";
import AdminLayout from "./layouts/AdminLayout";

import HomePage from "./pages/HomePage";
import VotePage from "./pages/VotePage";
import ResultsPage from "./pages/ResultsPage";
import ProfilePage from "./pages/ProfilePage";


import AdminPage from "./pages/admin/AdminPage";
import CandidatesPage from "./pages/admin/CandidatesPage";
import ElectionControlPage from "./pages/admin/ElectionControlPage";
import AdminResultsPage from "./pages/admin/AdminResultsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* voter routes */}
        <Route element={<VoterLayout />} >
          <Route path="/" element={<HomePage />} />
          <Route path="vote" element={<VotePage />} />
          <Route path="results" element={<ResultsPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>

        {/* Admin routes */}
        <Route element={<AdminLayout />} >
          <Route path="/admin" element={<AdminPage />} />
          <Route
            path="/admin/candidates"
            element={<CandidatesPage />} />
          <Route
            path="/admin/election"
            element={<ElectionControlPage />}
          />
          <Route
            path="/admin/results"
            element={<AdminResultsPage />}
          />
        </Route>



      </Routes>
    </BrowserRouter>
  );
}

export default App;