import React, { useState as useStateMock } from 'react';
import '@testing-library/jest-dom';
import { prettyDOM, render, screen } from '@testing-library/react';

import { useLoaderData } from 'react-router';
import Plateau from './Plateau';
import { Container } from 'postcss';
jest.mock('react-router', () => ({
	useLoaderData: jest.fn(),
}));
jest.mock('react', () => ({
	...jest.requireActual('react'),
	useState: jest.fn(),
}));
jest.mock('../Boule/Boule', () => () => <div>Boule</div>);
jest.mock('../Tentative/Tentative', () => () => <div>Tentative</div>);
beforeEach(() => {});

describe.skip('Mastermind', () => {
	it('should display statistics of the user', () => {
		const setWin = jest.fn();
		const setTentatives = jest.fn();
		useLoaderData.mockReturnValue({ tentatives: 5 });
		useStateMock
			.mockImplementationOnce(() => [true, setWin])
			.mockImplementationOnce(() => [
				[{ id: 1, actif: true }],
				setTentatives,
			]);
		const { container } = render(<Plateau />);
		//console.log(prettyDOM(container));

		expect(screen.getByText(/5/i)).toBeInTheDocument();
	});

	describe('if the player wins', () => {
		beforeEach(() => {
			const setWin = jest.fn();
			const setTentatives = jest.fn();

			useStateMock
				.mockImplementationOnce(() => [true, setWin])
				.mockImplementationOnce(() => [
					[{ id: 1, actif: true }],
					setTentatives,
				]);
		});
		it('should display bravo', () => {
			render(<Plateau />);
			expect(screen.getByText(/bravo/i)).toBeInTheDocument();
		});
		it('should display the solution', () => {
			render(<Plateau />);
			expect(screen.getByText(/solution/i)).toBeInTheDocument();
		});
	});

	describe('if the player looses', () => {
		beforeEach(() => {
			const setWin = jest.fn();
			const setTentatives = jest.fn();

			useStateMock
				.mockImplementationOnce(() => [false, setWin])
				.mockImplementationOnce(() => [
					[
						{ id: 1, actif: false },
						{ id: 2, actif: false },
						{ id: 3, actif: false },
						{ id: 4, actif: false },
						{ id: 5, actif: false },
						{ id: 6, actif: false },
						{ id: 7, actif: false },
						{ id: 8, actif: false },
						{ id: 9, actif: false },
					],
					setTentatives,
				]);
		});

		it('should display hard luck', () => {
			render(<Plateau />);
			expect(screen.getByText(/hard luck/i)).toBeInTheDocument();
		});
		it('should display the solution', () => {
			render(<Plateau />);
			expect(screen.getByText(/solution/i)).toBeInTheDocument();
		});
	});
});
