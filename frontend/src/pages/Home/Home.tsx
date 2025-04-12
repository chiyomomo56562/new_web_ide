import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import { FaList } from 'react-icons/fa';
import ProjectCard from '../../components/project/ProjectCard';
import { PROJECT_CARD_GRID_COLUMNS } from '../../constants/project';
import { Project } from '../../types/project';

const Home: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRecentProjects();
  }, []);

  const fetchRecentProjects = async () => {
    try {
      setIsLoading(true);
      // TODO: API 연동 시 실제 API 호출로 대체
      const response = await fetch('/api/projects/recent');
      const data = await response.json();
      setProjects(data.projects);
    } catch (error) {
      console.error('최근 프로젝트를 불러오는데 실패했습니다:', error);
      // 임시 데이터
      setProjects([{
        id: '1',
        name: '샘플 프로젝트',
        description: '샘플 프로젝트 설명입니다.',
        lastModified: '2024-03-20T12:00:00',
        isFavorite: true,
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
        }
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenProject = (id: string) => {
    // TODO: 프로젝트 열기 로직
    window.location.href = `/workspace/${id}`;
  };

  const handleProjectSettings = (id: string) => {
    // TODO: 프로젝트 설정 모달 표시
    window.location.href = `/projects/${id}/settings`;
  };

  const handleToggleFavorite = async (id: string) => {
    try {
      // TODO: API 연동 시 실제 API 호출로 대체
      setProjects(projects.map(project => 
        project.id === id 
          ? { ...project, isFavorite: !project.isFavorite }
          : project
      ));
    } catch (error) {
      console.error('즐겨찾기 상태 변경에 실패했습니다:', error);
    }
  };

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>최근 프로젝트</h1>
        <Button variant="outline-primary" href="/projects">
          <FaList className="me-2" />
          전체 프로젝트
        </Button>
      </div>

      {isLoading ? (
        <div className="text-center py-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">로딩중...</span>
          </Spinner>
        </div>
      ) : projects.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-muted">최근 작업한 프로젝트가 없습니다.</p>
          <Button variant="primary" href="/projects/new">새 프로젝트 만들기</Button>
        </div>
      ) : (
        <Row xs={PROJECT_CARD_GRID_COLUMNS.xs} 
             sm={PROJECT_CARD_GRID_COLUMNS.sm} 
             md={PROJECT_CARD_GRID_COLUMNS.md} 
             lg={PROJECT_CARD_GRID_COLUMNS.lg} 
             className="g-4">
          {projects.map(project => (
            <Col key={project.id}>
              <ProjectCard
                project={project}
                onOpen={handleOpenProject}
                onSettings={handleProjectSettings}
                onToggleFavorite={handleToggleFavorite}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Home; 