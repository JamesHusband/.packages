import { updateProject } from './';

describe('updateProject', () => {
  const mockProjectResponse = {
    id: '1',
    name: 'Updated Project',
  };

  const mockClient = {
    put: jest.fn().mockResolvedValue(mockProjectResponse),
  };

  it('should call client.put with the correct URL and body for project update', async () => {
    const updateInfo = {
      params: { id: '1' },
      body: { name: 'Updated Project' },
    };
    await updateProject(mockClient, updateInfo);
    expect(mockClient.put).toHaveBeenCalledWith(
      `rest/api/3/project/${updateInfo.params.id}`,
      updateInfo.body
    );
  });

  it('returns the updated Project object', async () => {
    const updateInfo = {
      params: { id: '1' },
      body: { name: 'Updated Project' },
    };
    const project = await updateProject(mockClient, updateInfo);
    expect(project).toEqual(mockProjectResponse);
  });
});
