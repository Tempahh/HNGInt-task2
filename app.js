import express from 'express';
import fetch from 'node-fetch';
import { isPrime, isPerfect, isArmstrong, numParity, totalSum } from './utils.js';
import cors from 'cors';

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.json('Hello World')
})

app.get('/api/classify-number', async (req, res) => {
    let { number} = req.query;

    // Validate the input parameters
    if (!number) {
        return res.status(400).json({
            error: true,
            number: `${number}`
        });
    }
    //convert negtive numbers to positive
    let num;
    if (number < 0) num = Math.abs(number);

    //convert the number to an integer
    num = parseInt(number, 10);
    if (isNaN(num)) return res.status(400).json({
        error: true,
        number: `${number}`
    });

    try {
        // Construct the external API URL
        const extUrl = `http://numbersapi.com/${number}`;
        const response = await fetch(extUrl);

        // Check if the response from the external API is successful
        if (!response.ok) {
            throw new Error('Failed to fetch data from external API');
        }

        // Get the text data from the response
        const data = await response.text();

        // Create the classification object with various properties
        const classification = {
            number: number,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties: [
                // Only include 'armstrong' if the number is Armstrong.
                ...isArmstrong(num),
                // Always include the parity result.
                numParity(num)
              ],
            digit_sum: totalSum(num),
            fun_fact: data, // Data from numbersapi.com
        };

        // Send the classification object as a JSON response
        res.json(classification);
    } catch (error) {
        console.error(error);
        res.status(400).json(
            error
        );
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});