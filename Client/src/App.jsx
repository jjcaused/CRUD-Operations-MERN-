import { AdminDashboad } from "./pages/AdminDashboad";
import { CreateEmp } from "./pages/CreateEmp";
import { EmpEditList } from "./pages/EmpEditList";
import { EmpList } from "./pages/EmpList";
import { Loginpage } from "./pages/Loginpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/admindashboard" element={<AdminDashboad />} />
          <Route path="/createemp" element={<CreateEmp />} />
          <Route path="/empeditlist" element={<EmpEditList />} />
          <Route path="/emplist" element={<EmpList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
