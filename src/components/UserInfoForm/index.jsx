import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { USER_VALIDATION_SCHEMA } from '../../utils/validate/validationSchemas';

// Formik взяв на себе керуванням станом керованого компонента
// + містить шаблонний код його обробників
function UserInfoForm () {
  const userInitialValues = { firstName: '' };

  const handleSubmit = (values, formikBag) => {
    console.log('values :>> ', values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={userInitialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_VALIDATION_SCHEMA}
    >
      {formikProps => {
        return (
          <Form>
            <label>
              <span>Name:</span>
              <Field
                type='text'
                name='firstName'
                placeholder='Name'
                autoFocus
              />
              <ErrorMessage name='firstName' component='div' />
            </label>

            <button type='submit'>Save</button>
            <button type='reset' disabled={!formikProps.dirty}>
              Cancel
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default UserInfoForm;
