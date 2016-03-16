function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setLocalStorage(key, value,callback) {
  localStorage.setItem(key, JSON.stringify(value));
}

function localStorageInit() {
  localStorage.clear();
  localStorage.setItem('num1', '');
  localStorage.setItem('num2', '');
}
