import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';



// Routes
import AppRoutes from './routes'

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
	<Router>
		<AppRoutes />
	</Router>,
	document.getElementById('root')
);

registerServiceWorker();