const BASE_URL = "https://rectangle-app-rvq3.onrender.com/api";

// GET HISTORY
export const getHistory = async () => {
  try {
    const res = await fetch(`${BASE_URL}/history`);
    return await res.json();
  } catch (err) {
    console.error("Error fetching history:", err);
    return [];
  }
};

// CALCULATE
export const calculateRectangle = async (length, width) => {
  try {
    const res = await fetch(`${BASE_URL}/calculate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ length, width }),
    });
    return await res.json();
  } catch (err) {
    console.error("Error calculating:", err);
    return null;
  }
};

// DELETE ONE
export const deleteItem = async (id) => {
  try {
    await fetch(`${BASE_URL}/history/${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    console.error("Delete error:", err);
  }
};

// CLEAR ALL
export const clearHistory = async () => {
  try {
    await fetch(`${BASE_URL}/history`, {
      method: "DELETE",
    });
  } catch (err) {
    console.error("Clear error:", err);
  }
};