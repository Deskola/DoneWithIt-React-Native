import React from 'react';
import { Alert, Keyboard } from 'react-native';
import * as Yup from 'yup';
import * as Notifications from 'expo-notifications';

import messageApi from '../api/message';
import { AppFormField, AppFormik, SubmitButton } from './forms';

const validationSchema = Yup.object().shape({
    message: Yup.string().required().min(1).label("Message"),
});
function ContactSellerForm({listing}) {
    const handleSubmit = async ({message}, {resetForm}) => {
        Keyboard.dismiss();

        const result = await messageApi.send(message, listing.id );

        if (!result.ok) {
            console.log("Error", result);
            return Alert.alert("Error", "Could not send the message to the seller.")
        }

        resetForm();

        Notifications.presentLocalNotificationAsync({
            title: "Awesome!",
            body: "Your message was sent to the seller.",
        })
    }
    return (
        <AppFormik
            initialValues={{message: ""}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}>
            <AppFormField
                maxLength={255}
                multiline
                name="message"
                numberOfLines={3}
                placeholder="Message..."/>
            <SubmitButton title="Contact Seller"/>
        </AppFormik>
    );
}
export default ContactSellerForm;