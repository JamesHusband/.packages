import { logger } from './logger';

import { consoleOutput } from './logger';

describe('logger with mock output handler', () => {
  let capturedLogs = [];

  const mockOutputHandler = (msg) => {
    capturedLogs.push(msg);
  };

  beforeAll(() => {
    logger.removeOutput(consoleOutput);
  });

  afterAll(() => {
    logger.addOutput(consoleOutput);
  });

  beforeEach(() => {
    capturedLogs = [];
    logger.addOutput(mockOutputHandler);
  });

  afterEach(() => {
    logger.removeOutput(mockOutputHandler);
  });

  it('should capture log messages without printing them', () => {
    logger.info('Test message');
    logger.error('Error message');

    expect(capturedLogs).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          message: expect.stringContaining('Test message'),
        }),
        expect.objectContaining({
          message: expect.stringContaining('Error message'),
        }),
      ])
    );
  });
});
