const setInLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

const getLocalStorageParsedData = (key: string) => {
  return JSON.stringify(localStorage.getItem(key));
}; 

export {
  setInLocalStorage,
  getLocalStorageParsedData
};