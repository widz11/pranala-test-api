import express from "express";
import { GenerateSegitigaService } from "./GenerateSegitigaService.js";
import bodyParser from "body-parser";
import { GenerateBilanganGanjilService } from "./GenerateBilanganGanjilService.js";
import { GenerateBilanganPrimaService } from "./GenerateBilanganPrimaService.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Test');
});

app.post('/segitiga', async (req, res) => {
  const result = (new GenerateSegitigaService).generate(req.body)
  res.send(result);
});

app.post('/ganjil', async (req, res) => {
  const result = (new GenerateBilanganGanjilService).generate(req.body)
  res.send(result);
});

app.post('/prima', async (req, res) => {
  const result = (new GenerateBilanganPrimaService).generate(req.body)
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});