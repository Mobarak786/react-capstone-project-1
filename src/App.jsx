import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./auth/PrivateRoutes";
import PrivateRoutes2 from "./auth/PrivateRoutes2";

import BrowseEntertainment from "./pages/BrowseEntertainment/BrowseEntertainment";
import Registration from "./pages/registration/Registration";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import Error404 from "./pages/errorPage/Error404";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Registration />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/category" element={<Category />} />
        </Route>
        <Route element={<PrivateRoutes2 />}>
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
