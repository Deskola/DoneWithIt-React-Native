import AsyncStorage from '@react-native-async-storage/async-storage';

import dayjs from 'dayjs';

const prefix = 'cache';
const expiredTime = 5;

const storeData = async (key , value) => {
   try {
        const item = {
            value,
            timestamp: Date.now()
        }
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item))
   } catch (error) {
       console.log(error)
   }
};

const isExpired = (item) => {
    const now = dayjs();
    const storedTime = dayjs(item.timestamp);
    return now.diff(storedTime, 'minute') > expiredTime;
}

const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(prefix + key);
        const item = JSON.parse(value);

        if (!item) return null

        //Item expired 
       
        if (isExpired(item)) {
            await AsyncStorage.removeItem(prefix + key);
            return null;
        }

        //item exist
        return item.value

    } catch (error) {
        console.log(error)
    }
}

export default {
    storeData,
    getData,
}