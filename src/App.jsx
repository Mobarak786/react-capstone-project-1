import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Registration from "./pages/Registration";
import Category from "./pages/Category";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/register" element={<Registration />} />
        <Route path="/category" element={<Category />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;
