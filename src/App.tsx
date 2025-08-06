import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/router/Router';
import { ScrollToTop } from './components/atoms/ScrollToTop';
import theme  from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
        <BrowserRouter>
        <Router />
        <ScrollToTop />
      </BrowserRouter>      
    </ChakraProvider>
  );
}

export default App;
