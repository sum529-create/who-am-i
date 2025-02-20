import authInstance from './authInstance';

export const register = async (userData) => {
  try {
    const response = await authInstance.post("/register", userData);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch userData", error);
    throw error;
  }
};

export const login = async (userData) => {
  try {
    const response = await authInstance.post("/login", userData);
    return response.data
  } catch (error) {
    console.error("Failed to login", error);
    throw error
  }
};

export const getUserProfile = async (token) => {
  try {
    const response = await authInstance.get("/user",  {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to get user profile");
    throw error
  }
};

export const updateProfile = async (formData, token) => {
  try {
    const response = await authInstance.patch("/profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (error) {
    console.error("Failed to update profile");
    throw error
  }
};