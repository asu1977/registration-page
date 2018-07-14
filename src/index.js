import React from 'react';
import ReactDom from 'react-dom';

import "./style/main.scss";

import Homepage from './Containers/Homepage';

ReactDom.render(
	<Homepage />,
	document.getElementById('root')
);
