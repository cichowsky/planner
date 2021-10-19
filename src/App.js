import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ThemeProvider from 'providers/ThemeProvider';
import MainView from 'views/MainView';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainView} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
