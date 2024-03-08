# Income Tax API README

The Income Tax API is a RESTful API that allows you to calculate income taxes for individuals based on their income and country code. The API supports multiple countries, as listed in the `countryCodes` object.

## API Sandbox
https://incometax-api.onrender.com

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  * [Endpoints](#endpoints)
  * [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

```
git clone https://github.com/your-repository/income-tax-api.git
```

2. Navigate to the repository:

```
cd income-tax-api
```

3. Install dependencies:

```
npm install
```

4. Start the API:

```
npm start
```

The API should now be running on http://localhost:3000.

## Usage

### Endpoints

The Income Tax API offers the following endpoints:

- `POST /api/income-tax`: Calculate income tax based on provided income and country code.
- `GET /api/country`: Retrieve a list of supported country codes and corresponding country names.

### Examples

To calculate the income tax for an individual with an income of 50,000 and a country code of "UK":

```
POST /api/income-tax
Content-Type: application/json

{
  "income": 50000,
  "countryCode": "UK"
}
```

The response will include the calculated tax, income, country, and country code:

```
{
    "tax": 1480,
    "taxableAmount": 61000,
    "taxRebate": 9000,
    "taxPercentage": 2.11,
    "currency": "MYR",
    "income": 70000,
    "country": "malaysia",
    "countryCode": "MY"
}Ï
```

To retrieve a list of supported country codes and corresponding country names:

```
GET /api/country
```

The response will include the supported country codes and corresponding country names:

```
{
  "UK": "united-kingdom",
  "US": "united-states",
  "CA": "canada",
  ...
}
```

## Contributing

To contribute to this project, please submit an issue or create a pull request with your proposed changes.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
