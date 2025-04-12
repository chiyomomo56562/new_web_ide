export interface ProjectResources {
  cpu: {
    limit: number;
    request: number;
  };
  memory: {
    limit: string;
    request: string;
  };
}

export interface Project {
  id: string;
  name: string;
  description: string;
  template: string;
  resources: ProjectResources;
  isFavorite: boolean;
  lastModified: string;
}

export interface CreateProjectData {
  name: string;
  description: string;
  template: string;
  resources: ProjectResources;
  isFavorite: boolean;
}

export interface ProjectsResponse {
  projects: Project[];
  total: number;
  currentPage: number;
  totalPages: number;
}

export interface CreateProjectRequest {
  name: string;
  description: string;
  template: string;
}

export interface CreateProjectResponse {
  id: string;
  name: string;
  description: string;
  template: string;
  createdAt: string;
}