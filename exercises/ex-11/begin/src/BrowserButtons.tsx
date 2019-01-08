import * as React from 'react';

interface BrowserButtonsProps {
  onNextPrev: ( direction: string ) => void;
}

function BrowserButtons( { onNextPrev }: BrowserButtonsProps ) {
  return (
    <div className="btn-group">
      <button onClick={ () => onNextPrev( 'previous' ) }
              name="previous"
              className="btn btn-default">
        &laquo; Prev
      </button>
      <button onClick={ () => onNextPrev( 'next' ) }
              name="next"
              className="btn btn-default">
        Next &raquo;
      </button>
    </div>
  );
}

export default BrowserButtons;
