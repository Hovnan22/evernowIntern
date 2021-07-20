import AsyncStorage from "@react-native-async-storage/async-storage";

class StorageService {
	static async setAuth(auth) {
		try {
			await AsyncStorage.setItem("@evernow:auth", JSON.stringify(auth));
		} catch (e) {
			console.log(e);
		}
	}

	static async getAuth() {
		try {
			const auth = await AsyncStorage.getItem("@evernow:auth");
			return JSON.parse(auth);
		} catch (e) {
			console.log(e);
		}
	}

}

export default StorageService;
