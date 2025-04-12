import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, ToggleButtonGroup, ToggleButton, Pagination } from 'react-bootstrap';
import { FaPlus, FaSearch, FaStar, FaClock } from 'react-icons/fa';
import ProjectCard from '../../components/project/ProjectCard';
import CreateProjectModal from '../../components/project/CreateProjectModal';
import { PROJECT_CARD_GRID_COLUMNS } from '../../constants/project';
import { Project, CreateProjectData } from '../../types/project';

interface ProjectsResponse {
  projects: Project[];
  total: number;
  currentPage: number;
  totalPages: number;
}

const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'favorite'>('recent');
  const [showSearch, setShowSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      // API 호출 예시
      const response = await fetch(
        `/api/projects?page=${currentPage}&sort=${sortBy}&search=${searchQuery}`
      );
      const data: ProjectsResponse = await response.json();
      
      setProjects(data.projects);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('프로젝트 로딩 실패:', error);
      // TODO: 에러 처리
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [currentPage, sortBy, searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1); // 검색 시 첫 페이지로 이동
    fetchProjects();
  };

  const handleCreateProject = async (data: CreateProjectData) => {
    try {
      // TODO: API 연동 시 실제 API 호출로 대체
      await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setShowCreateModal(false);
      fetchProjects();
    } catch (error) {
      console.error('프로젝트 생성에 실패했습니다:', error);
    }
  };

  const handleOpenProject = (id: string) => {
    // TODO: 프로젝트 열기 로직
  };

  const handleProjectSettings = (id: string) => {
    // TODO: 프로젝트 설정 모달 표시
  };

  const handleToggleFavorite = (id: string) => {
    setProjects(projects.map(project => 
      project.id === id 
        ? { ...project, isFavorite: !project.isFavorite }
        : project
    ));
  };

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>전체 프로젝트</h1>
        <div className="d-flex gap-2">
          <Button variant="outline-primary" onClick={() => setShowSearch(!showSearch)}>
            <FaSearch className="me-2" />
            검색
          </Button>
          <Button variant="primary" onClick={() => setShowCreateModal(true)}>
            <FaPlus className="me-2" />
            새 프로젝트
          </Button>
        </div>
      </div>

      {showSearch && (
        <Form onSubmit={handleSearch} className="mb-4">
          <Form.Group>
            <div className="d-flex gap-2">
              <div className="position-relative flex-grow-1">
                <Form.Control
                  type="text"
                  placeholder="프로젝트 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="ps-4"
                />
                <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
              </div>
              <Button type="submit" variant="primary">검색</Button>
            </div>
          </Form.Group>
        </Form>
      )}

      <div className="mb-4">
        <ToggleButtonGroup type="radio" name="sort" value={sortBy} onChange={(val) => setSortBy(val)}>
          <ToggleButton id="sort-recent" value="recent" variant="outline-primary">
            <FaClock className="me-2" />
            최근 사용순
          </ToggleButton>
          <ToggleButton id="sort-favorite" value="favorite" variant="outline-primary">
            <FaStar className="me-2" />
            즐겨찾기순
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      {isLoading ? (
        <div className="text-center py-5">
          <span>로딩 중...</span>
        </div>
      ) : (
        <>
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

          <div className="d-flex justify-content-center mt-4">
            <Pagination>
              <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
              <Pagination.Prev onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 1} />
              
              {[...Array(totalPages)].map((_, idx) => (
                <Pagination.Item
                  key={idx + 1}
                  active={idx + 1 === currentPage}
                  onClick={() => setCurrentPage(idx + 1)}
                >
                  {idx + 1}
                </Pagination.Item>
              ))}

              <Pagination.Next onClick={() => setCurrentPage(p => p + 1)} disabled={currentPage === totalPages} />
              <Pagination.Last onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} />
            </Pagination>
          </div>
        </>
      )}

      <CreateProjectModal
        show={showCreateModal}
        onHide={() => setShowCreateModal(false)}
        onSubmit={handleCreateProject}
      />
    </Container>
  );
};

export default Projects; 