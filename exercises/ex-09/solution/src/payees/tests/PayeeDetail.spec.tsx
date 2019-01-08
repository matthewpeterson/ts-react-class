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
    expect( tree )
      .toMatchSnapshot();
  } );

  test( 'PayeeDetail has the right props', () => {
    expect( testRenderer.root.props.payee )
      .toBe( payee );
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

    expect( text.includes( payee.zip ) )
      .toBeTruthy();
    expect( text.includes( payee.payeeName ) )
      .toBeTruthy();
    expect( text.includes( payee.address ) )
      .toBeTruthy();
    expect( text.includes( payee.city ) )
      .toBeTruthy();
    expect( text.includes( payee.state ) )
      .toBeTruthy();
    expect( text.includes( payee.zip ) )
      .toBeTruthy();
  } );

  test( 'PayeeDetail renders a categoryName', () => {
    const text = wrapper.text();
    expect( text.includes( payee.category.categoryName ) )
      .toBeTruthy();
  } );

} );
