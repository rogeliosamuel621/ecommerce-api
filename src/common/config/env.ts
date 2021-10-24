export const appConfig = (): IAppConfig => ({
  PORT: Number(process.env.PORT) || 4000,
});

export const getEnvPath = (env: string) => {
  const envPaths = {
    local: '.env.local',
    dev: '.env.dev',
    prod: '.env.prod',
    test: '.env.test',
  };

  return envPaths[env] || envPaths.local;
};

export interface IAppConfig {
  PORT: number;
}
