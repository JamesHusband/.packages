import { getProject } from './';

describe('getProject', () => {
  const mockProjectResponse = {
    id: '1',
    name: 'Test Project',
  };

  const mockClient = {
    get: jest.fn().mockResolvedValue(mockProjectResponse),
  };

  it('should call client.get with the correct URL using project ID', async () => {
    const projectId = { params: { id: '1' } };
    await getProject(mockClient, projectId);
    expect(mockClient.get).toHaveBeenCalledWith(
      `rest/api/3/project/${projectId.params.id}`
    );
  });

  it('returns a Project object', async () => {
    const projectId = { params: { id: '1' } };
    const project = await getProject(mockClient, projectId);
    expect(project).toEqual(mockProjectResponse);
  });
});
