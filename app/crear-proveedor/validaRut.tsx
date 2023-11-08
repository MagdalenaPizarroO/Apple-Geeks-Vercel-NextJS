import React from "react";
import { Formik } from "formik";
import { checkRut, prettifyRut, formatRut } from "react-rut-formatter";

interface Props {
	rutInicial: string;
	onChange: (formattedRut: string) => void;
}

interface FormValues {
	rut: string;
}

export const ValidaRut: React.FC<Props> = ({ rutInicial = "", onChange }) => {
	return (
		<div>
			<Formik
				initialValues={{ rut: rutInicial }}
				validate={(values) => {
					const errors: Partial<FormValues> = {};

					if (!values.rut) {
						errors.rut = "Se requiere un RUT";
					} else if (!checkRut(values.rut)) {
						errors.rut = "RUT inválido";
					}

					return errors;
				}}
				onSubmit={(values: FormValues) => {
					const formattedRut = formatRut(values.rut);
					console.log(formattedRut);
				}}
			>
				{({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue }) => (
					<form onSubmit={handleSubmit}>
						<input
							className='form-control'
							style={{ width: "140px" }}
							name='rut'
							id='rut'
							value={values.rut}
							onChange={(event) => {
								const formatted = prettifyRut(event.target.value);
								setFieldValue("rut", formatted);
								onChange(formatted);
							}}
							onBlur={handleBlur}
						/>
						{errors.rut && touched.rut && <p style={{ color: "red" }}>{errors.rut}</p>}
					</form>
				)}
			</Formik>
		</div>
	);
};
