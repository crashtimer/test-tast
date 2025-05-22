export const getStorage = (key: StorageKey) => {
  return localStorage.getItem(key);
};

export const setStorage = (key: StorageKey, value: string) => {
  localStorage.setItem(key, value);
};

export const removeStorage = (key: StorageKey) => {
  localStorage.removeItem(key);
};
