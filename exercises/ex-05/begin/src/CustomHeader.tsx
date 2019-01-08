import * as React from 'react';

const CustomHeader = ( props: any ) => {
  return (
    <header className="page-header">
      { props.children }
    </header>
  );
};

export default CustomHeader;
