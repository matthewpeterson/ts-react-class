import * as React from 'react';

interface CustomHeaderProps {
  today: string;
}

const CustomHeader = ( props: CustomHeaderProps ) => {
  return (
    <header className="page-header">
      <h1>Super-Fake Banking Services</h1>
      <div>Serving the community since {props.today}</div>
      <hr/>
    </header>
  );
}

export default CustomHeader;
