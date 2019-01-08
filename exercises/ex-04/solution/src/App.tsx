import * as React from 'react';
import CustomHeader from './CustomHeader';
import CustomFooter from './CustomFooter';
import ThemeViewer from './ThemeViewer';

const App = () => {
  const company = {
    name   : 'Alchemax',
    address: '100 Forest Lane',
    city   : 'Metropark',
    state  : 'NJ',
    zip    : '07027'
  };

  const today = new Date();

  return (
    <section>
      <CustomHeader today="Monday">
        <h1>Super-Fake Banking Services</h1>
        <div>Serving the community since Monday</div>
      </CustomHeader>
      <h1>{ today.getHours() < 12 ?  'Good morning' : 'Good afternoon'}, world</h1>
      <ThemeViewer theme="ocean"/>
      <CustomFooter company={company}/>
    </section>
  );
};

export default App;