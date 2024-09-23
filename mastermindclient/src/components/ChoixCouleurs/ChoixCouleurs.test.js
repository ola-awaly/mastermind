import React from 'react';
//import { useState as useStateMock } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChoixCouleurs from './ChoixCouleurs';

// onst ChoixCouleurs = ({ setChoix, setChoixbool, setProp, pos }) => {
// 	const handleClick = (coul) => {
// 		setChoix(coul);
// 		setChoixbool(false);
// 		setProp((prevprop) =>
// 			prevprop.map((element) =>
// 				element.pos === pos ? { ...element, couleur: coul } : element
// 			)
// 		);

describe.skip('ChoixCouleur', () => {
	it('should render the right color when selected', () => {
		const setChoix = jest.fn();
		const setChoixbool = jest.fn();
		const setProp = jest.fn();
		const pos = 2;
		render(
			<ChoixCouleurs
				setChoix={setChoix}
				setChoixbool={setChoixbool}
				setProp={setProp}
				pos={pos}
			/>
		);
		fireEvent.click(screen.getByTestId(/green/i));
		expect(setChoix).toHaveBeenCalledWith('bg-green-800');
		expect(setChoixbool).toHaveBeenCalled();
		expect(setProp).toHaveBeenCalled();
	});
});
