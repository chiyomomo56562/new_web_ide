import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { CreateProjectData } from '../../../types/project';
import { useProjectForm } from '../../../hooks/useProjectForm';
import BasicInfoSection from './sections/BasicInfoSection';
import ResourceSection from './sections/ResourceSection';
import FavoriteSection from './sections/FavoriteSection';

interface CreateProjectModalProps {
  show: boolean;
  onHide: () => void;
  onSubmit: (projectData: CreateProjectData) => void;
}

const CreateProjectModal: React.FC<CreateProjectModalProps> = ({ show, onHide, onSubmit }) => {
  const {
    formData,
    handleBasicInfoChange,
    handleResourceChange,
    handleFavoriteChange,
    resetForm
  } = useProjectForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    resetForm();
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>새 프로젝트 생성</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <BasicInfoSection
            name={formData.name}
            description={formData.description}
            template={formData.template}
            onChange={handleBasicInfoChange}
          />
          <ResourceSection
            resources={formData.resources}
            onChange={handleResourceChange}
          />
          <FavoriteSection
            isFavorite={formData.isFavorite}
            onChange={handleFavoriteChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>취소</Button>
          <Button variant="primary" type="submit">생성</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default CreateProjectModal; 