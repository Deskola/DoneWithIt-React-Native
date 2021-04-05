import React from 'react';
import { Formik } from 'formik';

function AppFormik({initialValues, onSubmit, validationSchema, children}) {
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
            {() =>(
                <>
                    {children}
                </>  
            )}
        </Formik>
    );
}

export default AppFormik;