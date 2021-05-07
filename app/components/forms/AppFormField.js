import React from 'react';
import { useFormikContext } from 'formik';
import { StyleSheet } from 'react-native';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({name, ...otherProps}) {
    const {setFieldTouched,setFieldValue, handleChange, errors, touched, values} = useFormikContext();
    return (
        <>
            <AppTextInput                
                onBlur={() => setFieldTouched(name) }
                onChangeText={text => setFieldValue(name, text)}
                value={values[name]}
                {...otherProps}               
                />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
            
        </>
    );
}
const styles = StyleSheet.create({
    
})
export default AppFormField;