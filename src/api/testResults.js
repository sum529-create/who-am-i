import jsonInstance from "./jsonInstance";

/**
 * MBTI 테스트 결과 리스트 조회 요청
 * @returns {Promise<Object>}
 */
export const getTestResults = async () => {
  const response = await jsonInstance.get("/testResults");
  return response.data;
};

/**
 * MBTI 결과 상세 정보 조회 요청
 * @param {string} id - 상세 정보 조회 할 ID
 * @returns {Promise<Object>}
 */
export const getTestResultById = async (id) => {
  const response = await jsonInstance.get(`/testResults/${id}`);
  return response.data;
};

/**
 * MBTI 테스트 결과 생성 요청
 * @param {object} resultData - 테스트 결과 및 유저정보 요청
 * @param {string} resultData.userId - 사용자 아이디
 * @param {string} resultData.nickname - 사용자 닉네임
 * @param {string} resultData.avatar - 사용자 프로필
 * @param {Date} resultData.createdAt - 테스트 작성한 일시
 * @param {boolean} resultData.visibility - 테스트 공개여부
 * @param {string} resultData.description - 테스트 내용
 * @param {string} resultData.mbtiResult - MBTI 내용
 * @returns
 */
export const createTestResult = async (resultData) => {
  const response = await jsonInstance.post("/testResults", resultData);
  return response.data;
};

/**
 * 테스트 결과 삭제 요청
 * @param {string} id - 삭제할 MBTI 데이터의 id
 * @returns
 */
export const deleteTestResult = async (id) => {
  const response = await jsonInstance.delete(`/testResults/${id}`);
  return response.data;
};

/**
 * 테스트 결과 공개여부 요청
 * @param {string} id - 업데이트 할 MBTI 데이터의 id
 * @param {boolean} visibility - 테스트 공개여부
 * @returns
 */
export const updateTestResultVisibility = async ({ id, visibility }) => {
  const response = await jsonInstance.patch(`/testResults/${id}`, {
    visibility,
  });
  return response.data;
};
