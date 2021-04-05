import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup'; 


import useLocation from '../hooks/useLocation';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/FormImagePicker';
import { AppFormField, SubmitButton, AppFormik, AppFormPicker } from '../components/forms';
import listings from '../api/listings';
import Screen from '../components/Screen';
import UploadScreen from './UploadScreen';



const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
    {
      backgroundColor: "#fc5c65",
      icon: "floor-lamp",
      label: "Furniture",
      value: 1,
    },
    {
      backgroundColor: "#fd9644",
      icon: "car",
      label: "Cars",
      value: 2,
    },
    {
      backgroundColor: "#fed330",
      icon: "camera",
      label: "Cameras",
      value: 3,
    },
    {
      backgroundColor: "#26de81",
      icon: "cards",
      label: "Games",
      value: 4,
    },
    {
      backgroundColor: "#2bcbba",
      icon: "shoe-heel",
      label: "Clothing",
      value: 5,
    },
    {
      backgroundColor: "#45aaf2",
      icon: "basketball",
      label: "Sports",
      value: 6,
    },
    {
      backgroundColor: "#4b7bec",
      icon: "headphones",
      label: "Movies & Music",
      value: 7,
    },
    {
      backgroundColor: "#a55eea",
      icon: "book-open-variant",
      label: "Books",
      value: 8,
    },
    {
      backgroundColor: "#778ca3",
      icon: "application",
      label: "Other",
      value: 9,
    },
  ];
function ListingEditScreen(props) {
    const location = useLocation(); 
    const [uploadVisible, setUploadVisible] =useState(false);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (listing) => {
      setUploadVisible(true);
      const result = await listings.addListing(
        {...listing, location}, progress => setProgress(progress)
      );
      setUploadVisible(false)
      if (!result.ok) return alert('Could not save the item.');
      alert('Success');
      
    }
    return (
        <Screen style={styles.container}>
            {/* <UploadScreen progress={progress} visible={uploadVisible}/> */}
            <AppFormik
                initialValues={{
                    title:"",
                    price:"",
                    description:"",
                    category:null,
                    images: [],
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images"/>
                <AppFormField
                    maxLength={255}
                    name="title"
                    placeholder="Title"/>
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"/>
                <AppFormPicker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"/>
                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}                    
                    placeholder="Description"/>
                <SubmitButton title="Post"/>
            </AppFormik>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        padding:20
    },
})
export default ListingEditScreen;