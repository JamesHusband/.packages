export interface CreateProjectRequest {
  assigneeType: string;
  avatarId: number;
  categoryId: number;
  description: string;
  issueSecurityScheme: number;
  key: string;
  leadAccountId: string;
  name: string;
  notificationScheme: number;
  permissionScheme: number;
  projectTemplateKey: string;
  projectTypeKey: string;
  url: string;
}
