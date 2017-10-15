import React from 'react';
import Logo from './static/images/logo.png';

console.log(Logo);

const App = () => (
  <main>
    <h1>Hello world!</h1>
    <img src={Logo} />
  </main>
);

export default App;
