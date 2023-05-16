import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PracList from "./components/PracList";
import PractiseId from "./components/PractiseId";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/list" element={<PracList />}></Route>
          <Route path="/" element={<PractiseId />}></Route>
          <Route path="/book" element={<h1>Routed from link</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
