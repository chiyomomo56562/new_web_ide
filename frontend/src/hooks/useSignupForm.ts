import { useState } from 'react';
import { FORM_INITIAL_VALUES } from '../constants/signup';
import SignupService from '../service/signup/SignupService';
import { useNavigate } from 'react-router-dom';
import UserIdDupCheckService from '../service/signup/UserIdDupCheckService';
import { SignupFormData } from '../types/auth/SignupFormData';

export const useSignupForm = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState<SignupFormData>(FORM_INITIAL_VALUES);
  const [isUserIdAvailable, setIsUserIdAvailable] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  // 회원가입 정보 변경 시 실행되는 함수
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // 아이디 입력 시 중복 확인 상태 초기화
    if (name === 'userId') {
        setIsUserIdAvailable(null);
    }
  };

  const checkIdAvailability = async () => {
    // 아이디 중복 확인
    if (!formData.userId) {
      alert('아이디를 입력해주세요.');
      return;
    }

    setIsChecking(true);
    try {
        const isAvailable = await UserIdDupCheckService(formData.userId);
        setIsUserIdAvailable(isAvailable);
      } catch (error) {
        console.error('아이디 중복 체크 중 오류 발생:', error);
        alert('아이디 중복 체크 중 오류가 발생했습니다.');
      } finally {
        setIsChecking(false);
      }
  };

  // 회원가입 제출 시 실행되는 함수
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isUserIdAvailable === false) {
      alert('사용할 수 없는 아이디입니다.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    SignupService(formData, () => {
      navigate('/login');
    });

  };

  return {
    formData,
    isUserIdAvailable,
    isChecking,
    handleChange,
    checkIdAvailability,
    handleSubmit
  };
}; 