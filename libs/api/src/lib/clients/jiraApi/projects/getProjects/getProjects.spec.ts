import { getProjects } from './';

describe('getProjects', () => {
  const mockProjectsResponse = [
    { id: '1', name: 'Test Project 1' },
    { id: '2', name: 'Test Project 2' },
  ];

  const mockClient = {
    get: jest.fn().mockResolvedValue(mockProjectsResponse),
  };

  it('should call client.get with the correct URL for project search', async () => {
    await getProjects(mockClient);
    expect(mockClient.get).toHaveBeenCalledWith(`/rest/api/3/project/search`);
  });

  it('returns an array of Project objects', async () => {
    const projects = await getProjects(mockClient);
    expect(projects).toEqual(mockProjectsResponse);
  });
});
