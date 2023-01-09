import React from 'react';
import Guesses from './Guesses';



// define the multiple views that can be shown within our single page application (SPA)
const Root = () => {
  return (
    <div>
      <main>
        <Guesses />
      </main>
    </div>
  );
};

export default Root;