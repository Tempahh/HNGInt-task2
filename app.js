import express from 'express';
import { isPrime, isPerfect, isArmstrong, numParity, totalSum } from './utils.js';
const app = express()


app.get('/api/classify-number/:number/:type', async (req, res) => {
    const { number, type } = req.params;

    // Validate the input parameters
    if (!number || !type || isNaN(number) || !Number.isInteger(parseFloat(number))) {
        return res.status(400).json({
            message: 'Invalid request. Please provide a valid integer number and type.',
        });
    }


    const num = parseInt(number, 10);

    try {
        // Construct the external API URL
        const extUrl = `http://numbersapi.com/${num}/${type}`;
        const response = await fetch(extUrl);

        // Check if the response from the external API is successful
        if (!response.ok) {
            throw new Error('Failed to fetch data from external API');
        }

        // Get the text data from the response
        const data = await response.text();

        // Create the classification object with various properties
        const classification = {
            number: num,
            isPrime: isPrime(num),
            isPerfect: isPerfect(num),
            properties: [isArmstrong(num), numParity(num)],
            digitSum: totalSum(num),
            fun_fact: data, // Data from numbersapi.com
        };

        // Send the classification object as a JSON response
        res.json(classification);
    } catch (error) {
        console.error(error);
        res.status(400).json({
            number: 'alphabet',
            error: true
        });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});