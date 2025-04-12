import { useState } from 'react';
import { FORM_INITIAL_VALUES } from '../constants/login';

type FormData = typeof FORM_INITIAL_VALUES;

export const useLoginForm = () => {
  const [formData, setFormData] = useState<FormData>(FORM_INITIAL_VALUES);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // TODO: 실제 로그인 API 호출로 대체
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      // TODO: 로그인 성공 처리
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
      alert('로그인 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // TODO: Google 로그인 구현
    console.log('Google 로그인');
  };

  const handleGithubLogin = () => {
    // TODO: Github 로그인 구현
    console.log('Github 로그인');
  };

  return {
    formData,
    isLoading,
    handleChange,
    handleSubmit,
    handleGoogleLogin,
    handleGithubLogin
  };
}; 