import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {Switch, useLocation} from "react-router"
import {Redirect, Route} from 'react-router-dom'
import Resume from './components/Resume';
import About from './components/About';
import Projects from './components/Projects';
import {AnimatePresence} from 'framer-motion';

function App() {

   const location = useLocation();
  return (
    
    <div className="App">
      <div className='container app__container'>
         <div className='row app__row'>
       <div className="col-lg-3">
         
            <Sidebar />
       </div>
       <div className="col-lg-9 app_main-content">
          <Navbar/>

          <AnimatePresence exitBeforeEnter>
          <Switch Location={location} key={location.key}>
          <Route exact path="/">
             <About />
          </Route>
             <Route path="/resume">
                 <Resume />
             </Route>
             <Route path="/projects" component={Projects} />
             <Route>
                 <Redirect to="/" />
              </Route>
              </Switch>
          </AnimatePresence>
       </div>
    </div>
    </div>
    </div>
  );
}

export default App;
