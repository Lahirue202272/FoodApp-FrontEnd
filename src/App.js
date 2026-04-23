import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import RegisterPage from "./components/auth/RegisterPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/register" element={<RegisterPage/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
