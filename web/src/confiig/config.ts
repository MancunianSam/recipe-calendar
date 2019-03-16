interface IConfig {
  serverUrl: string;
}
const serverUrl: string = process.env.REACT_APP_SERVER_URL as string;
console.log(serverUrl);
const config: IConfig = { serverUrl };

export { config };
