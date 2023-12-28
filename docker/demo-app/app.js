const express = require('express');
const prom = require('prom-client');

const app = express();
const port = 4000;

const collectDefaultMetrics = prom.collectDefaultMetrics;
// const Registry = client.Registry;
// const register = new Registry();
// collectDefaultMetrics({ register });
collectDefaultMetrics({ prefix: 'demo_nodejs_app_' });



app.get('/metrics', async function (req, res) {
  res.setHeader('Content-Type', prom.register.contentType);
  res.end(await prom.register.metrics());
});


app.get('/health', (req, res) => {
  res.send({"status": "okay"});
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
