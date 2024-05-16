import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Snavbar from "./Snavbar";
import AddProject from "./CenterComponent/AddProject";

function App() {
  return (
    <div className="App bgset">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Snavbar />} />
          <Route path="Add" element={<AddProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
