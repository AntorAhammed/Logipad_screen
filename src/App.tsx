import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Staking from "./pages/Staking";
import Farming from "./pages/Farming";
import Calender from "./pages/Calender"
import Explore_idos from "./pages/Explore_idos"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<Staking />} path="/staking" />
        <Route element={<Farming />} path="/Farming" />
        <Route element={<Calender />} path="/Calender" />
        <Route element={<Explore_idos />} path="/Explore_idos" />
      </Routes>
    </Router>
  );
}

export default App;
