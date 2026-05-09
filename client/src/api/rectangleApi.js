const BASE_URL = "http://localhost:5000/api";

export const calculateRectangle = async (length, width) => {
  const res = await fetch(`${BASE_URL}/calculate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ length, width }),
  });

  return await res.json();
};

export const getHistory = async () => {
  const res = await fetch(`${BASE_URL}/history`);
  return await res.json();
};

export const deleteItem = async (id) => {
  await fetch(`${BASE_URL}/history/${id}`, {
    method: "DELETE",
  });
};

export const clearHistory = async () => {
  await fetch(`${BASE_URL}/history`, {
    method: "DELETE",
  });
};