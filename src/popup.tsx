import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './assets/styles/main.scss';
import './App.css';
import Button from './components/Button';
import Guide_1 from './pages/Guide_1';
import Guide_2 from './pages/Guide_2';
import Guide_3 from './pages/Guide_3';
import Guide_4 from './pages/Guide_4';
import {Routes,Route} from 'react-router-dom'

function Popup() {
  return (
    <ChakraProvider>
      <div className="App">
        <Routes>
          <Route path="/" element = {<Guide_1 header_text='all about cookies' content='would you like to learn about cookies?' />} /> 
          <Route path="/G2" element = {<Guide_2 header_text='cookies' o1='what are they' o2='why should i care' o3='should i accept'/> } />
          <Route path="/G3" element = {<Guide_3 type= "cookie" header_text = "what are they" content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/> } />
          <Route path="/G4" element = {<Guide_4 header_text = "help us help you" content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,."/> } />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default Popup;
