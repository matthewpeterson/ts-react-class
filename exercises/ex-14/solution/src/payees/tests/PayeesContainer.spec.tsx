import * as React from 'react';
import { mount } from 'enzyme';
import { payeesDAO } from '../../data/class-data';
import PayeesContainer, { Views } from '../PayeesContainer';
import PayeeList from '../PayeeList';
import PayeeRow from '../PayeeRow';
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

test( 'Rendering the list', () => {
  const list = wrapper.find( PayeeList );
  const firstRow = list.find( PayeeRow ).at( 0 );

  expect( firstRow.find( 'td' ).at( 0 ).text() ).toMatch( payees[ 0 ].payeeName );

} );

test( 'Sorting the list', () => {
  const headers = wrapper.find( 'thead > tr > th' );
  const initialFirstRow = wrapper.find( PayeeRow ).at( 0 );

  expect( headers.length ).toBe( 3 );

  headers.at( 0 ).simulate( 'click' );
  const laterFirstRow = wrapper.find( PayeeRow ).at( 0 );

  expect( initialFirstRow ).not.toBe( laterFirstRow );

  expect( initialFirstRow.text() ).not.toBe( laterFirstRow.text() );
} );

test( 'Selecting a payee', () => {
  expect( wrapper.state().payee ).toBeNull();
  expect( wrapper.state().view ).toBe( Views.List );

  wrapper.find( PayeeRow ).at( 0 ).simulate( 'click' );

  expect( wrapper.state().payee ).toBeDefined();
  expect( wrapper.state().view ).toBe( Views.Detail );

} );

test( 'Handling next and previous', () => {
  const container: any = wrapper.instance();
  const spy = jest.spyOn<PayeesContainer, keyof PayeesContainer>(container, 'handleNextPrev');
  wrapper.mount();

  expect( spy.mock.calls.length ).toBe( 0 );
  wrapper.update();

  wrapper.find( PayeeRow ).at( 0 ).simulate( 'click' );
  wrapper.find( 'button[name="previous"]' ).simulate( 'click' );

  expect( spy.mock.calls.length ).toBe( 1 );
} );

test( 'Check next payee', () => {
  const expectedPayee = payees[ 1 ];

  wrapper.find( PayeeRow ).at( 0 ).simulate( 'click' );
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
