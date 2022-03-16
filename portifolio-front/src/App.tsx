import About from 'components/About';
import Information from 'components/Information';
import { Layout } from 'components/Layout';
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
        <Information/>
      </Layout>
    </React.Fragment>

  );
}

export default App;
