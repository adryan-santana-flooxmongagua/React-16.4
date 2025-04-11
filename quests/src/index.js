import React from 'react';
import ReactDOM from 'react-dom/client';

import Pai from './components/fatther';
import Filho from './components/child';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <Pai nome="Paulo" sobrenome="Silva">
      <Filho nome="Pedro" />
      <Filho nome="Paulo" />
      <Filho nome="Carla" />
    </Pai>
  </div>
);
