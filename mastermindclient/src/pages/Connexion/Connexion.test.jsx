import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Connexion from './Connexion';
// import { useNavigate } from 'react-router-dom';
// jest.mock('react-router-dom', () => ({
// 	...jest.requireActual('react-router-dom'),
// 	useNavigate: jest.fn(),
// }));
import * as router from 'react-router';

const navigate = jest.fn();

beforeEach(() => {
	jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});

describe.skip('Connexion', () => {
	it('should display the connection form', () => {
		const signin = jest.fn();
		render(
			<MemoryRouter>
				<AuthContext.Provider value={{ signin }}>
					<Connexion />
				</AuthContext.Provider>
			</MemoryRouter>
		);
		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('should not submit form when username or/and password is not filled', async () => {
		const signin = jest.fn();
		const handleSubmit = jest.fn();
		render(
			<MemoryRouter>
				<AuthContext.Provider value={{ signin }}>
					<Connexion handleSubmit={handleSubmit} />
				</AuthContext.Provider>
			</MemoryRouter>
		);
		// console.log(prettyDOM(screen.getByLabelText(/user/i)));

		// fireEvent.change(screen.getByLabelText(/user/i), {
		// 	target: { value: userTesting.username },
		// });
		// console.log(screen.getByLabelText(/user/i).value);
		// fireEvent.change(screen.getByLabelText(/password/i), {
		// 	target: { value: userTesting.password },
		// });

		fireEvent.click(screen.getByRole('button'));
		await waitFor(() => {
			expect(screen.getByLabelText(/user/i)).toBeInTheDocument();
		});
	});

	it('should submit form when username and password are filled', async () => {
		const userTesting = { username: 'one', password: 'two' };
		const signin = jest.fn();

		render(
			<MemoryRouter>
				<AuthContext.Provider value={{ signin }}>
					<Connexion />
				</AuthContext.Provider>
			</MemoryRouter>
		);
		// console.log(prettyDOM(screen.getByLabelText(/user/i)));

		fireEvent.change(screen.getByLabelText(/user/i), {
			target: { value: userTesting.username },
		});
		console.log(screen.getByLabelText(/user/i).value);
		fireEvent.change(screen.getByLabelText(/password/i), {
			target: { value: userTesting.password },
		});

		fireEvent.click(screen.getByRole('button'));
		await waitFor(() => {
			expect(signin).toHaveBeenCalled();
		});
	});

	it.only('should submit an error when username and password are not ok', async () => {
		const userTesting = { username: 'one', password: 'two' };
		const signin = jest.fn();
		signin.mockRejectedValue(new Error('failed authentication'));

		render(
			<MemoryRouter>
				<AuthContext.Provider value={{ signin }}>
					<Connexion />
				</AuthContext.Provider>
			</MemoryRouter>
		);
		// console.log(prettyDOM(screen.getByLabelText(/user/i)));

		fireEvent.change(screen.getByLabelText(/user/i), {
			target: { value: userTesting.username },
		});
		console.log(screen.getByLabelText(/user/i).value);
		fireEvent.change(screen.getByLabelText(/password/i), {
			target: { value: userTesting.password },
		});

		fireEvent.click(screen.getByRole('button'));

		await waitFor(() => {
			expect(screen.getByText('failed authentication')).toBeInTheDocument();
		});
		await waitFor(() => {
			expect(navigate).not.toHaveBeenCalled();
		}, 3000);
	});
	it('should navigate to another page  when username and password are ok', async () => {
		const userTesting = { username: 'one', password: 'two' };

		const signin = jest.fn();
		signin.mockResolvedValueOnce();
		//signin.mockRejectedValueOnce(new Error('failed authentication'));

		render(
			<MemoryRouter>
				<AuthContext.Provider value={{ signin }}>
					<Connexion />
				</AuthContext.Provider>
			</MemoryRouter>
		);
		// console.log(prettyDOM(screen.getByLabelText(/user/i)));

		fireEvent.change(screen.getByLabelText(/user/i), {
			target: { value: userTesting.username },
		});
		console.log(screen.getByLabelText(/user/i).value);
		fireEvent.change(screen.getByLabelText(/password/i), {
			target: { value: userTesting.password },
		});

		fireEvent.click(screen.getByRole('button'));

		await waitFor(() => {
			expect(
				screen.queryByText('failed authentication')
			).not.toBeInTheDocument();
		}, 3000);
		await waitFor(() => {
			expect(navigate).toHaveBeenCalled();
			debugger;
		}, 3000);
	});
});
