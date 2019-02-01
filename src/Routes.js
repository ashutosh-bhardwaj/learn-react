import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import PropsVsState from './lessons/03-Props-vs-State/index';
import PropsVsStateExercise from './lessons/03-Props-vs-State/exercise';
import ImperativeVsDeclarative from './lessons/05-Imperative-to-Declarative/index';
import './routes.css';

const routes = [
	{
		exact: true,
		path: '/',
		component: Links
	},
	{
		exact: true,
		isExercise: false,
		path: '/props-vs-state',
		component: PropsVsState,
		title: 'Props-Vs-State'
	},
	{
		exact: true,
		isExercise: true,
		path: '/props-vs-state/exercise',
		component: PropsVsStateExercise,
		title: 'Exercise 🌟 Props-Vs-State'
	},
	{
		exact: true,
		isExercise: false,
		path: '/imperative-vs-declarative',
		component: ImperativeVsDeclarative,
		title: 'Imperative-Vs-Declarative'
	}
];

function Routes() {
	return (
		<div className="main-container">
			<Switch>
				{routes.map(route => (
					<Route {...route} />
				))}
			</Switch>
		</div>
	);
}

export default Routes;

function Links() {
	return (
		<div className="links-container">
			{routes.map(route => {
				const style = route.isExercise
					? { color: '#f1c40f' }
					: { };
				return (
					<div style={{ marginBottom: 20 }}>
						<Link style={style} to={route.path}>{route.title}</Link>
					</div>
				);
			})}
		</div>
	);
}
