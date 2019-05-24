import React from 'react';
import { withFormik, Form, Field } from 'formik'



const MyForm = (props) => {
  
  const {values} = props;

  return (
    <div>
      <Form>
        <Field type="email" name="email" placeholder="Email" />

        <Field type="password" name="password" placeholder="Placeholder" />

        <Field type="checkbox" checked={values.adult}/>

        <Field component="select" name="country">
          <option value="Spain">Spain</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
        </Field>

        <button type="submit">Submit</button>
      </Form>
    </div>
  )
}



export default withFormik({
  mapPropsToValues: () => {

    return {
      email: '',
      password: '',
      adult: true,
      country: 'Spain'
    }
  },

  handleSubmit: (values) => {
    console.log('values', values);
  }
})(MyForm)
