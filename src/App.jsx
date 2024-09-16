import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import React from 'react';

import Dog from './components/animals/DogList';
import Cat from './components/animals/CatList';
import Bird from './components/animals/BirdList';

import Firstpage from './components/firstpage/homepage';
function App() {
    return (

      <Router>
        <Routes>
                
                <Route path="*" exact element={<Firstpage/>}/>
  

                <Route path="/DogList" element={<Dog/>} />
                <Route path="/CatList" element={<Cat/>} />
                <Route path="/BirdList" element={<Bird/>} />
               
   
        </Routes>
        </Router>
       
    );
}

export default App;