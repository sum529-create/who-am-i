import jsonInstance from "./jsonInstance";

export const getTestResults = async () => {
  const response = await jsonInstance.get("/testResults");
  return response.data;
};

export const getTestResultById = async (id) => {
  const response = await jsonInstance.get(`/testResults/${id}`);
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await jsonInstance.post("/testResults", resultData);
  return response.data;
};

export const deleteTestResult = async (id) => {
  const response = await jsonInstance.delete(`/testResults/${id}`);
  return response.data;
};

export const updateTestResultVisibility = async ({ id, visibility }) => {
  const response = await jsonInstance.patch(`/testResults/${id}`, {
    visibility,
  });
  return response.data;
};
