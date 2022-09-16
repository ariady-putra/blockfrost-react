const { BlockFrostAPI } = require('@blockfrost/blockfrost-js');
async function run(api, rsp) {
  const json = JSON.stringify(await api, null, 4);
  console.log(json);
  rsp.send(json);
}

var API;

const express = require('express');
const app     = express();
const server  = app.listen(55555, () => {
  const { exec } = require('child_process');
  exec('cat ~/cardano/cfg/pid.bf', (x,o,e) => {
    API = new BlockFrostAPI({
      projectId: o == null || o.trim().length == 0 ?
        'YOUR API KEY' : o.trim()
    });
  });
});

app.get('/latestBlock', function(req, rsp) {
  run(API.blocksLatest(), rsp);
});

app.get('/networkInfo', function(req, rsp) {
  run(API.network(), rsp);
});

app.get('/latestEpoch', function(req, rsp) {
  run(API.epochsLatest(), rsp);
});

app.get('/health', function(req, rsp) {
  run(API.health(), rsp);
});

app.get('/pools', function(req, rsp) {
  run(API.pools({ order: 'desc' }), rsp);
});

