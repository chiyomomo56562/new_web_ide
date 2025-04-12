import axios from 'axios';

const UserIdDupCheckService = async (userId: string): Promise<boolean> => {
  try {
    const response = await axios.get(`/oauth2/check-id?id=${userId}`);
    return response.data.available;
  } catch (error) {
    console.error('아이디 중복 확인 중 오류 발생:', error);
    throw error;
  }
};

export default UserIdDupCheckService;