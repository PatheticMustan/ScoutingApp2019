import asyncStorageFactory from '@react-native-community/async-storage';
import WebStorage from '@react-native-community/async-storage-backend-web';

export const idbStorage = asyncStorageFactory.create(new WebStorage());
export const localStorage = asyncStorageFactory.create(new WebStorage('local'));
export const sessionStorage = asyncStorageFactory.create(new WebStorage('session'));

/**
 * 
 * import LegacyStorage from '@react-native-community/async-storage-backend-legacy';
 * import AsyncStorageFactory from '@react-native-community/async-storage';
 * 
 * const legacy = new LegacyStorage();
 * const storage = AsyncStorageFactory.create(legacy);
 * 
 * export default storage;
 */