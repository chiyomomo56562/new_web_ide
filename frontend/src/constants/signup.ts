import { SignupFormData } from '../types/auth/SignupFormData';

export const FORM_FIELDS = {
  userId: {
    name: 'userId',
    label: '아이디',
    type: 'text',
    placeholder: '아이디를 입력하세요'
  },
  email: {
    name: 'email',
    label: '이메일',
    type: 'email',
    placeholder: '이메일을 입력하세요'
  },
  password: {
    name: 'password',
    label: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력하세요'
  },
  confirmPassword: {
    name: 'confirmPassword',
    label: '비밀번호 확인',
    type: 'password',
    placeholder: '비밀번호를 다시 입력하세요'
  },
} as const;

export const FORM_INITIAL_VALUES: SignupFormData = {
  userId: '',
  email: '',
  password: '',
  confirmPassword: '',
} as const; 