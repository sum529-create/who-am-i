import jsonInstance from "./jsonInstance";

export const getTestResults = async () => {
  const response = await jsonInstance.get();
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await jsonInstance.post('/',resultData)
  return response.data;
};

export const deleteTestResult = async (id) => {
  const response = await jsonInstance.delete(`/${id}`)
  return response.data
};

export const updateTestResultVisibility = async ({id, visibility}) => {
  const response = await jsonInstance.patch(`/${id}`, {visibility});
  return response.data
};