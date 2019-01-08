import * as React from 'react';
import { shallow } from 'enzyme';
import BrowserButtons from '../BrowserButtons';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure( { adapter: new Adapter() } );

test( 'Just a placeholder, delete this', () => {
  expect( 1 ).toBeTruthy();
} );
