import React from 'react';
//import { useState as useStateMock } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Boule from './Boule';

// jest.mock('React', () => ({
// 	...jest.requireActual('react'),
// 	useState: jest.fn(),
// }));

jest.mock('../ChoixCouleurs/ChoixCouleurs', () => (props) => (
	<div>
		<button data-testid="choose-red" onClick={() => props.setChoix('red')}>
			Choix couleur
		</button>
	</div>
));
//setProp, pos, couleurInitial = 'slate', actif

describe.skip('A boule', () => {
	describe('in a default environment', () => {
		// beforeEach(() => {
		// 	useStateMock
		// 		.mockImplementationOnce(() => [false, jest.fn()]) // mock actif = true
		// 		.mockImplementationOnce(() => ['slate', jest.fn()]); //mock choix couleur = red
		// });
		it('should display the color passed in props', () => {
			render(<Boule couleurInitial="blue" />);
			const boule = screen.getByTestId('boule');
			expect(boule).toHaveClass(/blue/i);
		});

		it('should display the default color', () => {
			render(<Boule />);
			const boule = screen.getByTestId('boule');
			expect(boule).toHaveClass(/slate/i);
		});
		it('should display the colors choice if clicked', async () => {
			render(<Boule actif={true} />);
			//const boule = screen.getByTestId('boule');
			fireEvent.click(screen.getByTestId('boule'));
			await waitFor(() => {
				expect(screen.getByText(/Choix couleur/)).toBeInTheDocument();
			});
		});
	});
	describe('if state color change', () => {
		beforeEach(() => {
			// jest
			// 	.spyOn(React, 'useState')
			// 	.mockImplementation((initialValue) => [
			// 		initialValue, // Return the initial value passed to useState
			// 		jest.fn(), // Mock the setter function
			// 	])
			// 	.mockImplementationOnce((initialValue) => [
			// 		initialValue,
			// 		jest.fn(),
			// 	]); //mock choix couleur = red;
		});
		afterEach(() => {
			// Restore original implementation after each test
			jest.restoreAllMocks();
		});
		it('should change color', async () => {
			// const setCouleur = jest.fn();
			// React.useState
			// 	.mockImplementationOnce(() => [true, jest.fn()])
			// 	.mockImplementationOnce(() => ['blue', setCouleur]); //mock choix couleur = red

			render(<Boule couleurInitial="blue" actif={true} />);
			const boule = screen.getByTestId('boule');
			expect(boule).toHaveClass(/blue/i);
			fireEvent.click(boule);
			await waitFor(() => {
				expect(screen.getByText(/Choix couleur/)).toBeInTheDocument();
			});
			fireEvent.click(screen.getByTestId('choose-red'));
			await waitFor(() => {
				expect(boule).toHaveClass(/red/i);
			});
		});
	});
});
