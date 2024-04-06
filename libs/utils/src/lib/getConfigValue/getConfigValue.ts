interface EnvConfig {
  JIRA_URL: string;
  JIRA_TOKEN: string;
  EXPRESS_PORT: string;
}

export const getConfigValue = <K extends keyof EnvConfig>(
  key: K
): EnvConfig[K] | undefined => {
  return process.env[key] as EnvConfig[K];
};
