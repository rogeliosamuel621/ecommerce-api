import { HashMap } from '../../interfaces/utils.interface';

export default () => ({
  app: {
    PORT: Number(process.env.PORT) || 4000,
    API_KEY: process.env.API_KEY,
  },
  db: {
    MONGO_DB_URI: process.env.MONGO_DB_URI,
  },
});

export const getEnvPath = (env: string): string => {
  const envPaths: HashMap<string> = {
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
