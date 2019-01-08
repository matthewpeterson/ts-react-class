import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {payeesDAO} from '../../data/class-data';
import PayeeDetail from '../PayeeDetail';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure( { adapter: new Adapter() } );

describe( 'PayeeDetail snapshots', () => {
} );

describe( 'PayeeDetail standard tests', () => {
  test( 'PayeeDetail renders a payee', () => {
  } );

  test( 'PayeeDetail has the right props', () => {
  } );

  test( 'PayeeDetail renders a categoryName', () => {
  } );

} );
