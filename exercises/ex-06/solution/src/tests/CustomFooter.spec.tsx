import * as React from 'react';
import * as renderer from 'react-test-renderer';

import CustomFooter from '../CustomFooter';

it( 'checks out against a snapshot', () => {
  const company = {
    name: 'Frobisher & Spalding',
    address: '1100 Avenue A',
    city: 'New York',
    state: 'NY',
    zip: '10023'
  };

  const tree = renderer.create(
    <CustomFooter company={company}/>
  ).toJSON();
  expect( tree ).toMatchSnapshot();
} );