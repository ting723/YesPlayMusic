import os from 'os';
import fs from 'fs';
import path from 'path';

// extract from NeteasyCloudMusicAPI/generateConfig.js and avoid bugs in there (generateConfig require main.js but the main.js has bugs)
if (!fs.existsSync(path.resolve(os.tmpdir(), 'anonymous_token'))) {
  fs.writeFileSync(path.resolve(os.tmpdir(), 'anonymous_token'), '', 'utf-8');
}

export default function checkAuthToken() {
  // 确保匿名token文件存在
  if (!fs.existsSync(path.resolve(os.tmpdir(), 'anonymous_token'))) {
    fs.writeFileSync(path.resolve(os.tmpdir(), 'anonymous_token'), '', 'utf-8');
  }
}
