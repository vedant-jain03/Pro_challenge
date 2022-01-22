import './App.css';
import Homepage from './Component/Homepage';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Blogpage from './Component/Blogpage';
import Bloginput from './Component/Bloginput';
import Login from './Component/Login';
import Register from './Component/Register';
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/#/' component={Homepage} />
          <Route exact path='/blog' component={Blogpage} />
          <Route exact path='/createblog' component={Bloginput} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
