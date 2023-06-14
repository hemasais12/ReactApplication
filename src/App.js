import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Operations from "./pages/Operations";
import Actions from "./pages/Actions";
import Frame  from "react-frame-component";
function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
          <div className="banner">          
            <Leftbar />
            <div className="data">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/account" element={<Account />} />
                <Route exact path="/operations" element={<Operations />} />
                <Route exact path="/actions" element={<Actions />} />
              </Routes>
            </div>
          </div>
        </Router>
    </div>
  );
}

export default App;
