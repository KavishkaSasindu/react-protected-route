import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Protected from "./utils/Protected";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="dashboard"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
