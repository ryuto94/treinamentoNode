import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewPost from './pages/NewPost';

class App extends React.Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/post" component={NewPost}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;