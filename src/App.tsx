import { Box, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/router/Router';
import theme  from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
        <BrowserRouter>
        <Router />
      </BrowserRouter>      
    </ChakraProvider>
  );
}

export default App;
