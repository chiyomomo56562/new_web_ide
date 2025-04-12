import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FaStar, FaEllipsisV } from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

interface ProjectCardProps {
  project: {
    id: string;
    name: string;
    description: string;
    lastModified: string;
    isFavorite: boolean;
    template: string;
  };
  onOpen: (id: string) => void;
  onSettings: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpen,
  onSettings,
  onToggleFavorite
}) => {
  return (
    <Card className="h-100">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-3">
          <Card.Title className="mb-0">{project.name}</Card.Title>
          <div className="d-flex gap-2">
            <Button
              variant="link"
              className="p-0"
              onClick={() => onToggleFavorite(project.id)}
            >
              <FaStar
                color={project.isFavorite ? '#ffc107' : '#6c757d'}
                size={18}
              />
            </Button>
            <Button
              variant="link"
              className="p-0"
              onClick={() => onSettings(project.id)}
            >
              <FaEllipsisV size={18} />
            </Button>
          </div>
        </div>
        <Card.Text className="text-muted small mb-3">
          {project.description}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <Badge bg="secondary">{project.template}</Badge>
          <small className="text-muted">
            {formatDistanceToNow(new Date(project.lastModified), {
              addSuffix: true,
              locale: ko
            })}
          </small>
        </div>
      </Card.Body>
      <Card.Footer className="bg-transparent border-0">
        <Button
          variant="primary"
          className="w-100"
          onClick={() => onOpen(project.id)}
        >
          프로젝트 열기
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard; 