import {PropsWithChildren} from 'react';
import {Formik, FormikHelpers} from 'formik';

interface AppFormProps extends PropsWithChildren {
  onSubmit: (
    values: any,
    formikHelpers: FormikHelpers<any>,
  ) => void | Promise<any>;
  validationSchema: {};
  initialValues: {};
}

function AppForm(props: AppFormProps) {
  const {initialValues, onSubmit, validationSchema, children} = props;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
