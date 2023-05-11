import express, { Request, Response } from "express";
import { countryCodes } from "./data/countryCodes";
import { calculateIncomeTaxes } from "./utils/taxCalculation";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/api/country", (req: Request, res: Response) => {
  res.send({ ...countryCodes });
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
        "Invalid or missing country code. Send a GET request to '/api/country' to get the supported country.",
    });
  }

  const tax = calculateIncomeTaxes(income, countryCode);
  res.send({ ...tax, income, country, countryCode });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
