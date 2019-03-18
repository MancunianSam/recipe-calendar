interface IConfig {
  serverUrl: string;
}
const serverUrl: string =
  process.env.NODE_ENV === "production"
    ? "https://sampalmer.dev/recipe-server"
    : "http://localhost:3002";
const config: IConfig = { serverUrl };

export { config };
