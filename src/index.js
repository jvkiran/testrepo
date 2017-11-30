import React from 'react';
import { render } from 'react-snapshot';
import { injectGlobal } from 'styled-components';
import { globalStyles } from './styles';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

// eslint-disable-next-line
injectGlobal`${globalStyles}`;

render(<Root />, document.getElementById('root'));
registerServiceWorker();