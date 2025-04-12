export const TEMPLATES = {
  EMPTY: {
    id: 'empty',
    name: '빈 프로젝트',
    description: '기본적인 파일 구조만 있는 빈 프로젝트'
  },
  REACT: {
    id: 'react',
    name: 'React 프로젝트',
    description: 'React + TypeScript + Vite 기반 프로젝트'
  },
  VUE: {
    id: 'vue',
    name: 'Vue 프로젝트',
    description: 'Vue 3 + TypeScript + Vite 기반 프로젝트'
  }
} as const;

export const PROJECT_CARD_GRID_COLUMNS = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4
} as const;

export const CPU_OPTIONS = [
  { label: '0.5 코어', value: 0.5 },
  { label: '1 코어', value: 1 },
  { label: '2 코어', value: 2 },
  { label: '4 코어', value: 4 }
];

export const MEMORY_OPTIONS = [
  { label: '256MB', value: '256Mi' },
  { label: '512MB', value: '512Mi' },
  { label: '1GB', value: '1Gi' },
  { label: '2GB', value: '2Gi' },
  { label: '4GB', value: '4Gi' }
]; 