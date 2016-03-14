import fs from 'fs';
import path from 'path';

export default (filename) =>
  fs.readFileSync(path.resolve(__dirname, filename), { encoding: 'utf-8' });

