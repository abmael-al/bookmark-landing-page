import * as Yup from "yup"
import { useFormik } from "formik"
import "./emailCapture.css"

export const EmailCapture = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup
                    .string()
                    .email("Whoops, make sure it's an email!")
                    .required("Whoops, make sure it's an email!")
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <section>
                <p>35.000+ ALREADY JOINED</p>
                <h2>Stay up-to-date with what we're doing</h2>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input 
                        name="email"
                        type="text" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email 
                        ? (<div>{formik.errors.email}</div>) 
                        : null}

                    <button type="submit">Contact Us</button>
                </form>
        </section>
    )
}