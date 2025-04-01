// Core
import chalk from 'chalk';
import { config } from 'dotenv';

config();

const input = process.argv[2];
const shouldColorize = process.env.COLORIZE === 'yes';

const error = (msg) => shouldColorize ? chalk.red(msg) : msg;
const success = (msg) => shouldColorize ? chalk.greenBright(msg) : msg;
const yellowArrow = (msg) => shouldColorize ? chalk.yellowBright(msg) : msg;

if (input === undefined) {
    console.error(error("Please provide a value in inches as an argument. Example: node index.js 5 or npm run 5"));
    process.exit(1);
}

const inches = parseFloat(input);

if (isNaN(inches)) {
    console.error(error("Invalid number. Usage: node index.js"));
    process.exit(1);
}

const centimetres = inches * 2.54;
console.log(success(`\"${inches}\" ${yellowArrow('>>>')} ${centimetres.toFixed(2)} cm`));