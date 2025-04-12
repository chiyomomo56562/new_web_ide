import { useState } from 'react';
import { CreateProjectData } from '../types/project';

const initialFormData: CreateProjectData = {
  name: '',
  description: '',
  template: 'React',
  resources: {
    cpu: {
      limit: 1,
      request: 0.5
    },
    memory: {
      limit: '512Mi',
      request: '256Mi'
    }
  },
  isFavorite: false
};

export const useProjectForm = () => {
  const [formData, setFormData] = useState<CreateProjectData>(initialFormData);

  const handleBasicInfoChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleResourceChange = (type: 'cpu' | 'memory', field: 'limit' | 'request', value: string) => {
    setFormData(prev => ({
      ...prev,
      resources: {
        ...prev.resources,
        [type]: {
          ...prev.resources[type],
          [field]: type === 'cpu' ? parseFloat(value) : value
        }
      }
    }));
  };

  const handleFavoriteChange = (isFavorite: boolean) => {
    setFormData(prev => ({ ...prev, isFavorite }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return {
    formData,
    handleBasicInfoChange,
    handleResourceChange,
    handleFavoriteChange,
    resetForm
  };
}; 