import { deleteProject } from './deleteProject';

describe('deleteProject', () => {
  const mockProjectResponse = {
    id: '1',
    name: 'Test Project',
  };

  const mockClient = {
    del: jest.fn().mockResolvedValue(mockProjectResponse),
  };

  it('should call client.del with the correct URL using project ID', async () => {
    const projectId = { params: { id: '1' } };
    await deleteProject(mockClient, projectId);
    expect(mockClient.del).toHaveBeenCalledWith(
      `/rest/api/3/project/${projectId.params.id}`
    );
  });

  it('returns a Project object after deletion', async () => {
    const projectId = { params: { id: '1' } };
    const response = await deleteProject(mockClient, projectId);
    expect(response).toEqual(mockProjectResponse);
  });
});
