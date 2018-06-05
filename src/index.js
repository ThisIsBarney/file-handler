import * as path from 'path';
import * as fs from 'fs';
import debug from 'debug';

const debugFileHandler = debug('file-handler');

const handler = async (file, callback, options) => {
  debugFileHandler('try open file: ', path.resolve(file));
  const data = fs.readFileSync(path.resolve(file), {
    encoding: 'utf8',
  });

  debugFileHandler('Read File successfully!');
  callback(data, options);
  debugFileHandler('Callback Executed successfully!');
};

// noinspection JSUnusedGlobalSymbols
export default handler;
