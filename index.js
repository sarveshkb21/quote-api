const http = require('http');
const fs = require('fs');
const quotes = JSON.parse(fs.readFileSync('./quotes.json'));

const server = http.createServer((req, res) => {
  if (req.url === '/quote') {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ quote: randomQuote }));
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Quote API running on port 3000');
});
