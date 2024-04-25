// localStorageUtils.js

// Save data to local storage
function saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Retrieve data from local storage
function getData(key) {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
}

// Remove data from local storage
function removeData(key) {
    localStorage.removeItem(key);
}

// Export functions for use in other modules
module.exports = { saveData, getData, removeData };
