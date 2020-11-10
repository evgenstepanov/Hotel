const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT ? process.env.PORT : 8080;
app.use(express.json());

app.use(cors());

app.use('/images', express.static(path.join(__dirname, '../client/img')));
app.use(express.static(__dirname + '../../public'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../dist')));
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../dist', 'index.html'));
  });
  app.listen(PORT, () => {
    console.log(`Listening port: ${PORT}`);
  });
} else if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const config = require(path.join(__dirname, '../../webpack.config'));
  const compiler = webpack(config);
  app.use(
    require('webpack-dev-middleware')(compiler, {
      publicPath: config.output.publicPath,
      stats: 'errors-only',
      writeToDisk: true,
    })
  );
  app.use(require('webpack-hot-middleware')(compiler));
  app.listen(PORT, () => {
    console.log(`Server listening port: ${PORT}`);
  });
  app.use('/*', express.static(path.join(__dirname, '../../dist')));
}
module.exports = app;
