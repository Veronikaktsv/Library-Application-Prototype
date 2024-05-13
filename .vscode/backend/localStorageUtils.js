// localStorageUtils.js

// Function to save data to localStorage
function saveToLocalStorage(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      return false;
    }
  }
  
  // Function to retrieve data from localStorage
  function getFromLocalStorage(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error retrieving from localStorage:', error);
      return null;
    }
  }
  
  // Function to remove data from localStorage
  function removeFromLocalStorage(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing from localStorage:', error);
      return false;
    }
  }
  
  module.exports = { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage };
  