import * as React from 'react';
import CustomHeader from './CustomHeader';
import CustomFooter from './CustomFooter';

const App = () => {
  const company = {
    name   : 'Roxxon Industries',
    address: '100 Forest Lane',
    city   : 'Metropark',
    state  : 'NJ',
    zip    : '07027'
  };
  
  return (
    <section>
      <CustomHeader today="Monday"/>
      <h1>Hello, world!</h1>
      <CustomFooter company={company}/>
    </section>
  );
};

export default App;