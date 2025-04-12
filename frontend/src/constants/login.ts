export const FORM_FIELDS = {
  id: {
    name: 'id',
    label: '아이디',
    type: 'text',
    placeholder: '아이디를 입력하세요'
  },
  password: {
    name: 'password',
    label: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력하세요'
  }
} as const;

export const FORM_INITIAL_VALUES = {
  id: '',
  password: ''
} as const; 