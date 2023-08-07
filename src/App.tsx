import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import logo from './logo.svg';
import './assets/styles/main.scss';
import './App.css';
import Button from './components/Button';
import Tester from './pages/Tester';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Tester />
      </div>
    </ChakraProvider>
  );
}

export default App;
