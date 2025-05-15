import clc from 'cli-color';
import checkAuthToken from '../utils/checkAuthToken.js';
import server from 'NeteaseCloudMusicApi/server.js';
import ncmModDef from '../ncmModDef.js';

export async function startNeteaseMusicApi() {
  // Let user know that the service is starting
  console.log(`${clc.redBright('[NetEase API]')} initiating NCM API`);

  // Load the NCM API.
  await server.serveNcmApi({
    port: 3000,
    moduleDefs: ncmModDef,
  });
}
