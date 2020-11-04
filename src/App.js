import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Unsubscribe from "./components/pages/Unsubscribe";
import Error from "./components/utils/Error";



function App() {

  const [theme, setTheme] = useState('dark');
  
  return (
    <>
      <Switch>
      <Route exact path='/' component={() => <Home theme={theme} setTheme={setTheme}/>}/>
      <Route path='/about' component={() => <About theme={theme} setTheme={setTheme}/>} />
      <Route path='/unsubscribe' component={() => <Unsubscribe theme={theme} setTheme={setTheme}/>} />
      <Route component={() => <Error theme={theme} setTheme={setTheme}/>} />
    </Switch>
    </>
  );
}

export default App;
