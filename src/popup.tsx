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

function Popup(props) {
  let prop_header, prop_intro, prop_content, prop_o1, prop_o2, prop_o3, prop_type;
  if (props == 'cookie') {
    prop_header = 'all about cookies';
    prop_intro = 'would you like to learn about cookies?';
    prop_content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    prop_o1 = 'what are they';
    prop_o2 = 'why should i care';
    prop_o3 = 'should i accept';
    prop_type = 'cookie'
  }
  else if(props == 'sign in'){
    prop_header = 'signing in';
    prop_intro = 'do you need help signing in?';
    prop_content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    prop_o1 = 'how do i sign in';
    prop_o2 = 'saving information';
    prop_o3 = 'logging out';
    prop_type = 'lock'

  }

  return (
    <ChakraProvider>
      <div className="App">
        <Routes>
          <Route path="/" element = {<Guide_1 header_text={prop_header} content={prop_intro}/>} /> 
          <Route path="/G2" element = {<Guide_2 header_text={prop_header} o1={prop_o1} o2={prop_o2} o3={prop_o3}/> } />
          <Route path="/G3" element = {<Guide_3 type= {prop_type} header_text = {prop_header} content ={prop_content}/> } />
          <Route path="/G4" element = {<Guide_4 header_text = "help us help you" content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,."/> } />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default Popup;
