import axios from 'axios';
import { SignupFormData } from '../../types/auth/SignupFormData';

const SignupService = async (formData: SignupFormData, onSuccess: () => void) => {  
    try {
        const response = await axios.post('/oauth2/signup', {
          id: formData.userId,
          password: formData.password,
          email: formData.email
        });
        if (response.status === 200) {
          alert('회원가입이 완료되었습니다.');
          onSuccess();
        }
      } catch (error) {
        console.error('회원가입 중 오류 발생:', error);
        alert('회원가입 중 오류가 발생했습니다.');
      }
}

export default SignupService
