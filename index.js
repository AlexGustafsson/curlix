const http = require('http');
const {
  Readable
} = require('stream');

const frames = require('./lib/animation');

const DELAY = 100;

function startStreamer(stream) {
  let index = 0;
  return setInterval(() => {
    if (index++ >= frames.length)
      index = 0;
    stream.push(frames[index]);
  }, DELAY);
}

const server = http.createServer((req, res) => {
  if (req.headers && req.headers['user-agent'] && !req.headers['user-agent'].includes('curl')) {
    res.writeHead(302, {'Location': 'https://github.com/alexgustafsson/curlix'});
    return res.end();
  }

  const stream = new Readable();
  stream._read = () => {};
  stream.pipe(res);
  const interval = startStreamer(stream);

  req.on('close', () => {
    stream.destroy();
    clearInterval(interval);
  });
});

const port = process.env.PORT || 3000;
server.listen(port, error => {
  if (error)
    throw error;
  console.log(`Listening on locahost:${port}`);
});
