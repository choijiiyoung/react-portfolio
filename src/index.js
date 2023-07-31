import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { GlobalProvider } from './hooks/useGlobalContext';

ReactDOM.render(
	<HashRouter>
		<GlobalProvider>
			<App />
		</GlobalProvider>
	</HashRouter>,
	document.getElementById('root')
);
