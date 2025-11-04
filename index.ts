import fs from 'fs';
import express from 'express';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  fs.readdir(__dirname, (err, data) => {
    res.json({
      data,
    });
  });
});

app.post('/', (req, res) => {
  const { name } = req.body;
  fs.readdir(`${__dirname}/${name}`, (err, data) => {
    res.json({ data });
  });
});

app.post('/file', (req, res) => {
  const { name } = req.body;

  fs.readFile(`${__dirname}/${name}`, 'utf-8', (err, data) => {
    res.json({ content: data });
  });
});

app.listen(PORT);
