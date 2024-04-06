import { createProject } from './';

describe('createProject', () => {
  const mockProjectResponse = {
    id: '1',
    name: 'Test Project',
  };

  const mockClient = {
    post: jest.fn().mockResolvedValue(mockProjectResponse),
  };

  it('should call client.post with the correct URL and body', async () => {
    const postBody = { body: { name: 'New Project', key: 'NP' } };
    await createProject(mockClient, postBody);
    expect(mockClient.post).toHaveBeenCalledWith(
      `rest/api/3/project/`,
      postBody.body
    );
  });

  it('returns a Project object', async () => {
    const postBody = { body: { name: 'New Project', key: 'NP' } };
    const project = await createProject(mockClient, postBody);
    expect(project).toEqual(mockProjectResponse);
  });
});
