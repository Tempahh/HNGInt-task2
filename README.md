```markdown
# Number Classification API

This is a simple Node.js API that classifies a given number based on various properties such as whether it is prime, perfect, an Armstrong number, and more. It also fetches a fun fact about the number from an external API (`numbersapi.com`).

## Endpoint

### `GET /api/classify-number/:number/:type`

Classifies the given number and returns a JSON object with various properties.

#### Parameters

- `number` (required): The integer number to classify.
- `type` (required): The type of fact to fetch from the external API. Possible values are `math`, `trivia`, `date`, or `year`.

#### Example Request

```bash
GET /api/classify-number/42/trivia
```

#### Example Response

```json
{
    "number": 42,
    "isPrime": false,
    "isPerfect": false,
    "properties": ['', "even"],
    "digitSum": 6,
    "fun_fact": "42 is the number of laws of cricket."
}
```

#### Error Responses

- **400 Bad Request**: If the `number` or `type` parameters are missing, or if the `number` is not a valid integer.

```json
{
    "message": "Invalid request. Please provide a valid integer number and type."
}
```

- **400 Bad Request**: If the external API (`numbersapi.com`) fails to return data.

```json
{
    "number": "alphabet",
    "error": true
}
```

## Functions Used

### `isPrime(num)`

Determines if the given number is a prime number.

### `isPerfect(num)`

Determines if the given number is a perfect number.

### `isArmstrong(num)`

Determines if the given number is an Armstrong number.

### `numParity(num)`

Determines if the given number is `even` or `odd`.

### `totalSum(num)`

Calculates the sum of the digits of the given number.

## External API

This API uses the [Numbers API](http://numbersapi.com/) to fetch fun facts about numbers. The `type` parameter determines the kind of fact to fetch:

- `math`: Mathematical fact about the number.
- `trivia`: Trivia fact about the number.
- `date`: Fact about the number as a date (e.g., `4/2` for April 2nd).
- `year`: Fact about the number as a year.

## Setup

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

4. The API will be available at `http://localhost:3000`.

## Dependencies

- `express`: Web framework for Node.js.
- `node-fetch`: Library to make HTTP requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

