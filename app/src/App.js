import React from 'react';
import {Routes, Route } from "react-router-dom";
import Welcome from './screens/Welcome';
import Aktiviteter from './screens/Aktiviteter';
import Detaljer from "./screens/Detaljer";
import Logind from "./screens/Logind";
import SøgSide from "./screens/SøgSide";
import Calandar from './components/calander/Calander';


function App() {
  
  return (
    <div className="bg-[#5E2E53] min-h-screen">
        <Routes>
          <Route path="/logind" element={<Logind/>} />
          <Route path="/" element={<Welcome/>}/>
          <Route path="/aktiviteter" element={<Aktiviteter/>}/>
          <Route path="/aktivitetsdetaljer/:id" element={<Detaljer/>}/>
          <Route path="/search" element={<SøgSide/>} />
          <Route path="/calandar" element={<Calandar/>} />
      </Routes>
    </div>
  );
}

export default App;