import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const port = 5000;

const corsOptions = {
  origin: "http://localhost:4200",
};

app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.send("Running");
});

app.get("/contribuyente/:id", async (req, res) => {
  const id = req.params.id;
  const url = `https://srienlinea.sri.gob.ec/sri-catastro-sujeto-servicio-internet/rest/ConsolidadoContribuyente/existePorNumeroRuc?numeroRuc=${id}`;
  const response = await fetch(url);
  console.log(response);
  if (!response.ok) {
    res.json("Error verifique el RUC");
  }
  const data = await response.json();
  res.json({ data });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
