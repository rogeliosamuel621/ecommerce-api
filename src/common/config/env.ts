export const appConfig = (): IAppConfig => ({
  PORT: Number(process.env.PORT) || 4000,
});

export const dbConfig = (): IDbConfig => ({
  MONGO_DB_URI: process.env.MONGO_DB_URI,
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

export interface IDbConfig {
  MONGO_DB_URI: string;
}
