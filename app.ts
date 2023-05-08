import express, { Request, Response } from "express";
import {
  calculateMalaysiaIncomeTax,
  calculateSingaporeIncomeTax,
} from "./utils/calculation";
import { countryCodes } from "./utils/countryCodes";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/income-tax", (req: Request, res: Response) => {
  const { income, countryCode } = req.body as {
    income: number;
    countryCode: string;
  };

  if (!income || typeof income !== "number") {
    return res.status(400).send({ error: "Invalid or missing income value." });
  }

  const country = countryCodes[countryCode];
  if (!country) {
    return res.status(400).send({
      error:
        'Invalid or missing country code. Supported country codes: "MY" (Malaysia) and "SG" (Singapore).',
    });
  }

  let tax;
  if (country === "malaysia") {
    tax = calculateMalaysiaIncomeTax(income);
  } else if (country === "singapore") {
    tax = calculateSingaporeIncomeTax(income);
  }

  res.send({ income, country, tax });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
