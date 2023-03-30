import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
