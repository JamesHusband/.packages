export interface Project {
  id: string;
  key: string;
  name: string;
}

export interface ProjectCreate {
  key: string;
  name: string;
  projectId: string;
  leadAccountId: string;
}
