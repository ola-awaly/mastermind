import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Footer from './Footer';

test('footer should exist', () => {
	render(<Footer />);
	const footer = screen.getByText(/awaly/i);

	expect(footer).toBeInTheDocument();
});
