import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        {/* Trang mặc định là Login */}
        <Route path="/" element={<Login />} />
        {/* Khi vào /register thì hiện form đăng ký */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
