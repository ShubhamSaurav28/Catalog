const fs = require('fs');

// Function to decode the given value from a specified base
function decodeValue(value, base) {
    return parseInt(value, base);
}

// Function to perform Gaussian elimination
function gaussianElimination(matrix, b) {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        // Forward elimination
        for (let j = i + 1; j < n; j++) {
            const ratio = matrix[j][i] / matrix[i][i];
            for (let k = i; k < n; k++) {
                matrix[j][k] -= ratio * matrix[i][k];
            }
            b[j] -= ratio * b[i];
        }
    }

    // Back substitution
    const coeffs = new Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        coeffs[i] = b[i] / matrix[i][i];
        for (let j = i - 1; j >= 0; j--) {
            b[j] -= matrix[j][i] * coeffs[i];
        }
    }

    return coeffs;
}

// Main function to process the input and solve the polynomial using Gaussian elimination
function findSecretConstantTermGaussian(inputFile) {
    const input = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));

    const n = input.keys.n; // Number of roots provided
    const k = input.keys.k; // Minimum number of roots required to solve for coefficients (k = m + 1)

    const points = [];

    // Loop through the provided points and decode them
    for (let key in input) {
        if (key === 'keys') continue; // Skip the "keys" section
        const x = parseInt(key); // x is the key of the object
        const base = parseInt(input[key].base); // Extract the base
        const value = input[key].value; // Encoded value (y)
        const y = decodeValue(value, base); // Decode the value
        points.push({ x, y }); // Store (x, y) pair
    }

    // Ensure there are enough points to solve the polynomial
    if (points.length < k) {
        console.error('Insufficient points to solve the polynomial!');
        return;
    }

    // Setting up the matrix and b for the equations
    const matrix = [];
    const b = [];

    for (let i = 0; i < k; i++) {
        const row = [];
        for (let j = 0; j < k; j++) {
            row.push(Math.pow(points[i].x, j)); // x^j for j = 0 to k-1
        }
        matrix.push(row);
        b.push(points[i].y); // y values
    }

    // Find the coefficients using Gaussian elimination
    const coeffs = gaussianElimination(matrix, b);
    console.log('The secret constant term (c) using Gaussian elimination is:', coeffs[0]); // The constant term
}

// Example usage: Provide the path to the JSON input file
findSecretConstantTermGaussian('catainput.json');
