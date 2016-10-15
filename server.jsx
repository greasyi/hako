const React = require('react');
const {renderToString} = require('react-dom/server');
const {match, RouterContext} = require('react-router');

const _ = require('lodash');
const compression = require('compression');
const express = require('express');
const fs = require('fs');
const path = require('path');

const Routes = require('./app/Routes');

function renderIndexDotHtml(innerHtml) {
  const IndexDotHtml = fs.readFileSync(path.resolve(__dirname, '/public/index.html'));
  return _.replace(IndexDotHtml, '<div id="app"></div>', `<div id="app">${innerHtml}</div>`);
}

const server = express();
server.use(compression());
server.use(express.static(path.join(__dirname, 'public')));
server.get('*', (req, res) => {
  match({routes: Routes, location: req.url}, (err, redirect, props) => {
    res.send(renderIndexDotHtml(renderToString(<RouterContext {...props} />)));
  });
});

const {PORT = 8080} = process.env;
server.listen(PORT, () => {
  console.log(`Express server now listening on port ${PORT}`); // eslint-disable-line no-console
});
