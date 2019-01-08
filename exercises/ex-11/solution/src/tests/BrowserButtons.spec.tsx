import * as React from 'react';
import { shallow } from 'enzyme';
import BrowserButtons from '../BrowserButtons';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure( { adapter: new Adapter() } );

let wrapper: any, onNextPrevSpy: any;

beforeEach( () => {
  onNextPrevSpy = jest.fn((direction: string) => 1);
  wrapper = shallow( <BrowserButtons onNextPrev={onNextPrevSpy}/> );
} );

test( 'Register a "Previous" click', () => {
  wrapper.find( '[name="previous"]' ).simulate( 'click' );

  expect( onNextPrevSpy.mock.calls.length ).toBeGreaterThan( 0 );
} );

test( 'Register a "Next" click', () => {
  wrapper.find( '[name="next"]' ).simulate( 'click' );

  expect( onNextPrevSpy.mock.calls.length ).toBeGreaterThan( 0 );
} );
