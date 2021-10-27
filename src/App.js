import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ThemeProvider from 'providers/ThemeProvider';
import ToDoView from 'views/ToDoView';
import CalendarView from 'views/CalendarView';
import ShoppingView from 'views/ShoppingView';
import SettingsView from 'views/SettingsView';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/todo" />} />
          <Route path="/todo" component={ToDoView} />
          <Route path="/calendar" component={CalendarView} />
          <Route path="/shopping" component={ShoppingView} />
          <Route path="/settings" component={SettingsView} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
