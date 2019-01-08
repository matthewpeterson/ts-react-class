import * as React from 'react';
import {mount} from 'enzyme';
import PayeesContainer from '../PayeesContainer';
import {payeesDAO} from '../../data/class-data';
import PayeeDetail from '../PayeeDetail';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure( { adapter: new Adapter() } );

test( 'This is a dummy test, remove later.', () => {
  expect( 1 ).toBeTruthy();
} );