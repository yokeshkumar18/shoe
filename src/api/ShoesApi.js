export async function getAllShoes() {
  try {
    const response = await fetch("http://localhost:5050/api/shoes");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching shoes:", error);
    throw error;
  }
}

export async function getShoeById(id) {
  try {
    const response = await fetch(`http://localhost:5050/api/shoes/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching shoe by ID:", error);
    throw error;
  }
}
