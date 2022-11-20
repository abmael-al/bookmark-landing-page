import * as Yup from 'yup';
import { useFormik } from 'formik';
import { GeneralContainer } from '../../../components';
import { ReactComponent as ErrorIcon } from '../../../assets/icons/error-icon.svg';
import './emailCapture.css';

export const EmailCapture = () => {
  const formManager = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Whoops, make sure it's an email!")
        .required("Whoops, make sure it's an email!"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const isInvalidEmail = formManager.touched.email && formManager.errors.email;

  return (
    <section className='email__capture'>
      <GeneralContainer>
        <div className='email__capture__body'>
          <p className='email__capture__text'>35.000+ ALREADY JOINED</p>
          <h2 className='email__capture__headline heading heading-200'>
            Stay up-to-date with what we're doing
          </h2>
        </div>
        <form className='form' onSubmit={formManager.handleSubmit}>
          <fieldset
            className={`form__fieldset ${
              isInvalidEmail ? 'form__fieldset--error' : ''
            }`}
          >
            <div className='form__input__wrapper'>
              <input
                className='form__input'
                name='email'
                type='text'
                placeholder='Enter your email address'
                onChange={formManager.handleChange}
                onBlur={formManager.handleBlur}
                value={formManager.values.email}
              />
              {isInvalidEmail ? <ErrorIcon /> : null}
            </div>
            {isInvalidEmail ? (
              <p className='form__error__message'>
                <i>{formManager.errors.email}</i>
              </p>
            ) : null}
          </fieldset>

          <button
            className='form__submit button button-thick button--primary--red'
            type='submit'
          >
            Contact Us
          </button>
        </form>
      </GeneralContainer>
    </section>
  );
};
