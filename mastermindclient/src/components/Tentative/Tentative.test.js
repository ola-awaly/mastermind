import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tentative from './Tentative';

// onst Tentative = ({
// 	sol,
// 	setwin,
// 	win,
// 	id,

// 	setTentatives,
// 	tentatives,
// })

describe.skip('Tentative', () => {
	beforeEach(() => {
		const tentatives = [
			{ id: 1, actif: false },
			{ id: 2, actif: true },
		];
		const sol = [
			{ couleur: 'bg-red', pos: 1 },
			{ couleur: 'bg-green', pos: 2 },
			{ couleur: 'bg-blue', pos: 3 },
			{ couleur: 'bg-yellow', pos: 4 },
		];
		const setTentatives = jest.fn();
		render(
			<Tentative
				id={12345}
				tentatives={tentatives}
				sol={sol}
				setTentatives={setTentatives}
			/>
		);
	});
	it('should display the tentative id', () => {
		expect(screen.getByText(/12345/)).toBeInTheDocument();
	});
	it('should display a check button', async () => {
		expect(screen.getByText(/check/i)).toBeInTheDocument();
	});
	it('should disable the button and display the tentative solution when clicked', async () => {
		expect(screen.getByText(/check/i)).toBeInTheDocument();
		fireEvent.click(screen.getByText(/check/i));

		expect(screen.getByText(/check/i)).toBeDisabled();

		//debug();

		expect(screen.getByTestId('tentative-sol')).toBeInTheDocument();
	});
});
