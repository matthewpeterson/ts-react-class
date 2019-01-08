import * as React from 'react';
import { mount } from 'enzyme';
import PayeesContainer from '../PayeesContainer';
import { payeesDAO } from '../../data/class-data';
import PayeeDetail from '../PayeeDetail';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Payee from '../../data/Payee';
Enzyme.configure( { adapter: new Adapter() } );

let payees: Payee[], wrapper: any;

beforeEach( () => {
  wrapper = mount( <PayeesContainer/> );
  payees = payeesDAO.list();
} );

xtest( 'Handling next and previous', () => {
  const container: any = wrapper.instance();
  const spy = jest.spyOn<PayeesContainer, keyof PayeesContainer>(container, 'handleNextPrev');
  wrapper.mount();

  expect( spy.mock.calls.length ).toBe( 0 );
  wrapper.update();
  wrapper.find( 'button[name="previous"]' ).simulate( 'click' );

  expect( spy.mock.calls.length ).toBe( 1 );
} );

xtest( 'Check initial payee', () => {
  const expectedPayee = payees[ 0 ];

  // Check state
  expect( wrapper.state( 'payee' ) ).toBe( expectedPayee );

  // Check references
  expect( wrapper.find( PayeeDetail ).prop( 'payee' ) ).toEqual(
    expectedPayee );

  // Check content
  expect( wrapper.find( '.panel-heading' ).text() ).toMatch(
    expectedPayee.payeeName );
} );

xtest( 'Check next payee', () => {
  const expectedPayee = payees[ 1 ];

  wrapper.find( 'button[name="next"]' ).simulate( 'click' );

  // Check state
  expect( wrapper.state( 'payee' ) ).toBe( expectedPayee );

  // Check references
  expect( wrapper.find( PayeeDetail ).prop( 'payee' ) ).toEqual(
    expectedPayee );

  // Check content
  expect( wrapper.find( '.panel-heading' ).text() ).toMatch(
    expectedPayee.payeeName );

  // Check the negative
  expect( wrapper.find( PayeeDetail ).prop( 'payee' ) ).not.toEqual(
    payees[ 0 ] );
  expect( wrapper.find( '.panel-heading' ).text() ).not.toMatch(
    payees[ 0 ].payeeName );
  expect( wrapper.state( 'payee' ) ).not.toBe( payees[ 0 ] );

} );
