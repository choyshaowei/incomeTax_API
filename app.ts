import express, { Request, Response } from "express";
import { countryCodes } from "./utils/countryCodes";
import { calculateIncomeTaxes } from "./utils/taxCalculation";

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

  const tax = calculateIncomeTaxes(income, countryCode);
  res.send({ ...tax, income, country, countryCode });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
