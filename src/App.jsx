import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Registration from "./pages/Registration";
import Category from "./pages/Category";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import PrivateRoutes from "./auth/PrivateRoutes";
import BrowseEntertainment from "./pages/BrowseEntertainment/BrowseEntertainment";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Registration />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/category" element={<Category />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/browseEntertainment"
            element={<BrowseEntertainment />}
          />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;
