import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import routes from './routes';

function App() {
  return (
    <>
      <Router>
        {routes.map((route) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Route key={route.path} {...route} />
        ))}
      </Router>
    </>
  );
}

export default App;
