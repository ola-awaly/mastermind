import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

import logo from '../../assets/images/logo.png';
test('should mock image import', () => {
	expect(logo).toBe('test-file-stub');
});
describe.skip('header', () => {
	it('should display the logo', () => {
		const mockContextValue = {
			currentUser: { name: 'Test User' },
			signout: jest.fn(),
		};

		render(
			<MemoryRouter>
				<AuthContext.Provider value={mockContextValue}>
					<Header />
				</AuthContext.Provider>
			</MemoryRouter>
		);
		expect(screen.getByAltText(/logo/)).toBeInTheDocument();
	});

	it('should not display the welcome message when the current user is null', () => {
		const currentUser = null;
		render(
			<MemoryRouter>
				<AuthContext.Provider value={{ currentUser }}>
					<Header />
				</AuthContext.Provider>
			</MemoryRouter>
		);

		expect(screen.queryByText(/bonjour/i)).not.toBeInTheDocument();
		expect(screen.getByText(/enregistrer/i)).toBeInTheDocument();
		expect(screen.getByText(/se connecter/i)).toBeInTheDocument();
		expect(screen.queryByText(/se déconnecter/i)).not.toBeInTheDocument();
	});

	it('should display the welcome message when the current user is filled', () => {
		const currentUser = { username: 'ola' };
		render(
			<MemoryRouter>
				<AuthContext.Provider value={{ currentUser }}>
					<Header />
				</AuthContext.Provider>
			</MemoryRouter>
		);

		expect(screen.getByText(/bonjour/i)).toBeInTheDocument();
		expect(screen.queryByText(/enregistrer/i)).not.toBeInTheDocument();
		expect(screen.queryByText(/se connecter/i)).not.toBeInTheDocument();
		expect(screen.getByText(/se déconnecter/i)).toBeInTheDocument();
	});
});
