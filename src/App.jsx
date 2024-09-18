/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import PetList from './components/animals/petList'; 
import Firstpage from './components/firstpage/homepage';

function App() {
    return (
      <Router>
        <Routes>
         
          <Route path="*" exact element={<Firstpage />} />

      
          <Route path="/pet-list/cats" element={<PetList petType="cats" apiUrl="https://freetestapi.com/api/v1/cats" />} />
          <Route path="/pet-list/dogs" element={<PetList petType="dogs" apiUrl="https://freetestapi.com/api/v1/dogs" />} />
          <Route path="/pet-list/birds" element={<PetList petType="birds" apiUrl="https://freetestapi.com/api/v1/birds" />} />
        </Routes>
      </Router>
    );
}

export default App;
