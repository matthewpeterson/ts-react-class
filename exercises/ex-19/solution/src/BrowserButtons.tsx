import * as React from 'react';

export interface BrowserButtonsProps {
  onNextPrev: ( direction: string ) => void;
  onBack: () => void;
}

function BrowserButtons( { onNextPrev, onBack }: BrowserButtonsProps ) {
  return (
    <div className="btn-group">
      <button onClick={ () => onNextPrev( 'previous' ) }
              name="previous"
              className="btn btn-default">
        &laquo; Prev
      </button>
      <button onClick={onBack}
              className="btn btn-default">
        Back
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
