import * as yup from 'yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
const Connexion = () => {
	const navigate = useNavigate();
	const { signin } = useContext(AuthContext);
	const loginSchema = yup.object({
		username: yup.string().required('Username obligatoire'),
		password: yup.string().required('password obligatoire'),
	});
	const defaultValues = {
		username: '',
		password: '',
	};
	const {
		register,
		handleSubmit,
		clearErrors,
		setError,
		reset,
		formState: { errors },
	} = useForm({ defaultValues, resolver: yupResolver(loginSchema) });
	const postLogin = async (values) => {
		console.log(values);
		try {
			clearErrors();
			await signin({
				username: values.username,
				password: values.password,
			});
			reset();
			navigate('/mastermind');
		} catch (error) {
			console.log(error.message);
			setError('general', { type: 'general', message: error.message });
		}
	};
	return (
		<form
			onSubmit={handleSubmit(postLogin)}
			className="shadow-2xl rounded p-4 bg-clouds-50 flex flex-col gap-2 text-sm"
		>
			<h1 className="text-xl text-center">Connexion</h1>
			<div>
				<label htmlFor="username" className="min-w-20 inline-block">
					User{' '}
				</label>
				<input
					type="text"
					id="username"
					{...register('username')}
					className={`min-w-36 p-2 rounded border${
						errors.username ? 'outline-red-900  border-red-800' : ''
					}`}
				/>
			</div>
			<div>
				<label htmlFor="password" className="min-w-20 inline-block">
					Password{' '}
				</label>
				<input
					type="password"
					id="password"
					{...register('password')}
					className={`min-w-36 p-2 rounded border ${
						errors.password ? 'outline-red-900  border-red-800' : ''
					}`}
				/>
			</div>
			{errors?.general && (
				<p className="bg-orange-500 text-white text-xs">
					{errors.general.message}
				</p>
			)}
			<button className="hover:opacity-90 text-slate-100 p-2 rounded transition-all bg-clouds-900 hover:scale-105">
				Submit
			</button>
		</form>
	);
};
export default Connexion;
