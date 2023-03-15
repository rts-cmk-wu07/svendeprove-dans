import {Routes, Route } from "react-router-dom";
import Welcome from './screens/Welcome';
import './App.css';
import Aktiviteter from './screens/Aktiviteter';
import Detaljer from "./screens/Detaljer";
import Logind from "./screens/Logind";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/logind" element={<Logind/>} />
          <Route path="/" element={<Welcome/>}/>
          <Route path="/aktiviteter" element={<Aktiviteter/>}/>
          <Route path="/aktivitetsdetaljer/:id" element={<Detaljer/>}/>
      </Routes>
    </div>
  );
}

export default App;
