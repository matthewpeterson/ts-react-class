import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow, ShallowWrapper } from 'enzyme';
import { payeesDAO } from '../../data/class-data';
import PayeeDetail, { PayeeDetailProps } from '../PayeeDetail';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Payee from '../../data/Payee';
import { ReactTestRenderer } from 'react-test-renderer';

Enzyme.configure( { adapter: new Adapter() } );

describe( 'PayeeDetail snapshots', () => {
  let payee: Payee, testRenderer: ReactTestRenderer;

  beforeEach( () => {
    payee = payeesDAO.get( 23 );
    testRenderer = renderer.create( <PayeeDetail payee={ payee }/> );
  } );

  test( 'renders correctly', () => {
    const tree = testRenderer.toJSON();
    expect( tree ).toMatchSnapshot();
  } );

  test( 'PayeeDetail has the right props',
        () => {expect( testRenderer.root.props.payee ).toBe( payee );} );

  test( 'renders a "Clothing" payee differently', () => {
    const clothingPayees = payeesDAO.list(
      { category: { categoryName: 'Clothing' } } );
    expect( clothingPayees.length ).toBeGreaterThan( 0 );

    const tree = renderer.create(
      <PayeeDetail payee={ clothingPayees[ 0 ] }/>
    ).toJSON();

    expect( tree ).toMatchSnapshot();
  } );

} );

describe( 'PayeeDetail standard tests', () => {

  let wrapper: ShallowWrapper<PayeeDetailProps, any>, payee: Payee;

  beforeEach( () => {
    payee = payeesDAO.get( 23 );
    wrapper = shallow<PayeeDetailProps>( <PayeeDetail payee={ payee }/> );
  } );

  test( 'PayeeDetail renders a payee', () => {
    const text = wrapper.text();

    expect( text.includes( payee.zip ) ).toBeTruthy();
    expect( text.includes( payee.payeeName ) ).toBeTruthy();
    expect( text.includes( payee.address ) ).toBeTruthy();
    expect( text.includes( payee.city ) ).toBeTruthy();
    expect( text.includes( payee.state ) ).toBeTruthy();
    expect( text.includes( payee.zip ) ).toBeTruthy();
  } );

  test( 'PayeeDetail renders a categoryName', () => {
    const text = wrapper.text();
    expect( text.includes( payee.category.categoryName ) )
      .toBeTruthy();
  } );

} );

describe( 'PayeeDetail CSS class changes', () => {
  test( 'PayeeDetail changes class on categoryName Salary', () => {
    const salaryPayees = payeesDAO.list( { category: { categoryName: 'Salary' } } );
    expect( salaryPayees.length ).toBeGreaterThan( 0 );

    const wrapper = shallow( <PayeeDetail payee={salaryPayees[ 0 ]}/> );
    expect( wrapper.find( '.panel' ).length ).toBe(1);
    expect( wrapper.find( '.panel-success' ).length ).toBe(1);

  } );

  test( 'PayeeDetail changes class on categoryName Clothing', () => {
    const clothingPayees = payeesDAO.list( { category: { categoryName: 'Clothing' } } );
    expect( clothingPayees.length ).toBeGreaterThan( 0 );

    const wrapper = shallow( <PayeeDetail payee={clothingPayees[ 0 ]}/> );
    expect( wrapper.find( '.panel' ).length ).toBe(1);
    expect( wrapper.find( '.panel-danger' ).length ).toBe(1);

  } );

  test( 'PayeeDetail changes class on other classes', () => {
    const stdPayees = payeesDAO.list( { category: { categoryName: 'Utilities' } } );
    expect( stdPayees.length ).toBeGreaterThan( 0 );

    const wrapper = shallow( <PayeeDetail payee={stdPayees[ 0 ]}/> );
    expect( wrapper.find( '.panel' ).length ).toBe(1);
    expect( wrapper.find( '.panel-info' ).length ).toBe(1);

  } );
} );
