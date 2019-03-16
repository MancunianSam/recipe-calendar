interface IConfig {
  serverUrl: string;
}
const serverUrl: string = process.env.REACT_APP_SERVER_URL as string;
const config: IConfig = { serverUrl };

export { config };
