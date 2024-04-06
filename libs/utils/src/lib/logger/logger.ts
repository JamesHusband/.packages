type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogMessage {
  level: LogLevel;
  message: string;
  data?: any;
  timestamp: Date;
}

const createLogOutputHandler = () => {
  let outputs = [];

  const addOutput = (output) => {
    outputs.push(output);
  };

  const removeOutput = (output) => {
    outputs = outputs.filter((o) => o !== output);
  };

  const dispatch = (msg) => {
    outputs.forEach((output) => output(msg));
  };

  return { addOutput, removeOutput, dispatch };
};

const logOutputHandler = createLogOutputHandler();

const createLogger = (
  logOutputHandler: ReturnType<typeof createLogOutputHandler>
) => {
  const log = (level: LogLevel, message: string, data?: any) => {
    const timestamp = new Date();
    const msg: LogMessage = { level, message, data, timestamp };
    logOutputHandler.dispatch(msg);
  };

  return {
    debug: (message: string, data?: any) => log('debug', message, data),
    info: (message: string, data?: any) => log('info', message, data),
    warn: (message: string, data?: any) => log('warn', message, data),
    error: (message: string, data?: any) => log('error', message, data),
    addOutput: logOutputHandler.addOutput,
    removeOutput: logOutputHandler.removeOutput,
  };
};

const formatMessage = ({ level, message, timestamp, data }) =>
  `[${timestamp.toISOString()}] [${level.toUpperCase()}]: ${message} ${
    data ? JSON.stringify(data) : ''
  }`;

export const consoleOutput = (msg) => console.log(formatMessage(msg));

logOutputHandler.addOutput(consoleOutput);

export const logger = createLogger(logOutputHandler);
