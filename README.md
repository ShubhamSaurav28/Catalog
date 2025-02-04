# Catalog
# Secret Constant Term Finder

This project implements a JavaScript solution for finding the constant term of a polynomial using the Gaussian elimination method. The input values are provided in different bases and are decoded for processing.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Input Format](#input-format)
- [Example](#example)
- [License](#license)

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 12 or higher)

## Installation

1. Clone this repository or download the source code:
   ```bash
   git clone <repository-url>
2. Navigate to the project directory
   ```bash
   cd <project-directory>
3. No additional dependencies are required, as the script uses built-in Node.js modules.

## Usage

1. Use the JSON input file named catainput.json in the project directory. The structure should be as follows:
   ```json
   {
    "keys": {
        "n": 10,
        "k": 7
    },
    "1": {
        "base": "6",
        "value": "13444211440455345511"
    },
    "2": {
        "base": "15",
        "value": "aed7015a346d63"
    },
    ...
    }
2. Run the JavaScript file using Node.js:
   ```bash
   node cata.js

This will read the input from catainput.json and output the secret constant term.

## Input Format

The input JSON file should contain:

A keys object with:

n: The number of points provided.
k: The minimum number of points required to solve for coefficients.
A series of numbered objects where each object contains:

base: The base of the encoded value.
value: The encoded value as a string.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

### Instructions
1. **Create a new file** named `README.md` in your project directory.
2. **Copy the content** above into the `README.md` file.
3. **Modify the `<repository-url>`** and `<project-directory>` placeholders in the Installation section to fit your project. 
4. Feel free to update any other details or sections as needed!

## Example
   ```json
   {
    "keys": {
        "n": 10,
        "k": 7
    },
    "1": {
        "base": "6",
        "value": "13444211440455345511"
    },
    "2": {
        "base": "15",
        "value": "aed7015a346d63"
    },
    "3": {
        "base": "15",
        "value": "6aeeb69631c227c"
    },
    "4": {
        "base": "16",
        "value": "e1b5e05623d881f"
    },
    "5": {
        "base": "8",
        "value": "316034514573652620673"
    },
    "6": {
        "base": "3",
        "value": "2122212201122002221120200210011020220200"
    },
    "7": {
        "base": "3",
        "value": "20120221122211000100210021102001201112121"
    },
    "8": {
        "base": "6",
        "value": "20220554335330240002224253"
    },
    "9": {
        "base": "12",
        "value": "45153788322a1255483"
    },
    "10": {
        "base": "7",
        "value": "1101613130313526312514143"
    }
    }





