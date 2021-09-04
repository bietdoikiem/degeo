import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from './components/HomeDashboard/Dashboard';
import './App.css';
import routes from './routes';

function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          {routes.map((route) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Route key={route.path} {...route} />
          ))}
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
