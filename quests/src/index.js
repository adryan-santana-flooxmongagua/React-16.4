import React from 'react';
import ReactDOM from 'react-dom/client';

import BND from './components/Sunday';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BND.BoaTarde nome="Ana" />
    <BND.BoaNoite nome="Bia" />
  </div>
);
