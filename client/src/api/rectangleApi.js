// Use environment variable or default based on environment
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

console.log('API Base URL:', BASE_URL);

export const calculateRectangle = async (length, width) => {
  try {
    const res = await fetch(`${BASE_URL}/calculate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ length, width }),
    });

    if (!res.ok) {
      throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Calculate error:', error);
    throw error;
  }
};

export const getHistory = async () => {
  try {
    const res = await fetch(`${BASE_URL}/history`);
    
    if (!res.ok) {
      throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Get history error:', error);
    throw error;
  }
};

export const deleteItem = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/history/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }
  } catch (error) {
    console.error('Delete item error:', error);
    throw error;
  }
};

export const clearHistory = async () => {
  try {
    const res = await fetch(`${BASE_URL}/history`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }
  } catch (error) {
    console.error('Clear history error:', error);
    throw error;
  }
};