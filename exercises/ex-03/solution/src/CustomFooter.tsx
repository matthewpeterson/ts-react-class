import * as React from 'react';

interface Company {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

interface CustomFooterProps {
  company: Company
}

const CustomFooter = ( props: CustomFooterProps ) => {
  return (
    <div className="footer">
      <hr/>
      <p>Copyright &copy; 2019 { props.company.name }</p>
      <address>
        { props.company.address }<br/>
        { props.company.city }, { props.company.state }<br/>
        { props.company.zip }
      </address>
    </div>
  );
};

export default CustomFooter;
