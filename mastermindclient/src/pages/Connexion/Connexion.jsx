import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const Connexion = () => {
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
		formState: { errors },
	} = useForm({ defaultValues, resolver: yupResolver(loginSchema) });
	const postLogin = (values) => {
		console.log(values);
	};
	return (
		<form
			onSubmit={handleSubmit(postLogin)}
			className="shadow-2xl rounded p-4 bg-clouds-50 flex flex-col gap-2 text-sm"
		>
			<h1 className="text-xl text-center">Connexion</h1>
			<div>
				<label htmlFor="" className="min-w-20 inline-block">
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
				<label htmlFor="" className="min-w-20 inline-block">
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
			<button className="hover:opacity-90 text-slate-100 p-2 rounded transition-all bg-clouds-900 hover:scale-105">
				Submit
			</button>
		</form>
	);
};
export default Connexion;
