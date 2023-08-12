import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './assets/styles/main.scss';
import './App.css';
import Button from './components/Button';
import Tutorial_1 from './pages/Tutorial_1';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Tutorial_1 />
      </div>
    </ChakraProvider>
  );
}

export default App;
