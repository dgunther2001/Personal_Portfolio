import React from 'react'

import { About,  Experience, Footer, Skills, Header, Projects} from './container';
import { NavBar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />

    </div>
  );
}

export default App;