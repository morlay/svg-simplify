import fs from 'fs';
import path from 'path';

export default (filename) =>
  fs.readFileSync(path.resolve(__dirname, '..', 'fixtures', filename), { encoding: 'utf-8' });

