import {Routes, Route } from "react-router-dom";
import Welcome from './screens/Welcome';
import './App.css';
import Aktiviteter from './screens/Aktiviteter';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/aktiviteter" element={<Aktiviteter/>}/>
          <Route />
      </Routes>
    </div>
  );
}

export default App;
