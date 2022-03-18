import About from 'components/About';
import { Layout } from 'components/Layout';
import Projects from 'components/Projects';
import Tecnology from 'components/Tecnologys';
import Welcome from 'components/Welcome';
import React from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Layout>
        <Welcome/>
        <About/>
        <Projects/>
        <Tecnology/>
      </Layout>
    </React.Fragment>

  );
}

export default App;
