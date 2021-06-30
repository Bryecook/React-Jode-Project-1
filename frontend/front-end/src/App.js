import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Tweet from './components/Tweet'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/tweets" exact component={Tweet} />
        </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
