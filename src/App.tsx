import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './assets/styles/main.scss';
import './App.css';
import Button from './components/Button';
import Tutorial_1 from './pages/Tutorial_1';
import Tutorial_2 from './pages/Tutorial_2';
import Tutorial_3 from './pages/Tutorial_3';
import Guide_2 from './pages/Guide_2';

import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Tutorial_1/>} />
          <Route path="/T2" element={<Tutorial_2/>} />
          <Route path="/T3" element={<Tutorial_3/>} />
          <Route path="/G2" element = {<Guide_2 header_text = "cookies" o1= 'what are they' o2= 'why should i care' o3= 'should i accept'/> } />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
