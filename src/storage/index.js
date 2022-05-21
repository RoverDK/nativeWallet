import AsyncStorage from "@react-native-async-storage/async-storage";

export const setObj = async (name, value) => {
    try {
        await AsyncStorage.setItem(name, JSON.stringify(value));
    } catch (error) {
        console.warn(error.name);
    }
}

export const getObj = async (name) => {
    try {
        const value = await AsyncStorage.getItem(name);
        return JSON.parse(value);
    } catch (error) {
        console.warn(error.name);
    }
}

export const mergeObj = async (name, value) => {
    try {
        AsyncStorage.mergeItem(name, JSON.stringify(value));
    } catch (error) {
        console.warn(error.name);
    }
}