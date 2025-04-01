// Core
import path from 'node:path';
import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { test, describe } from 'node:test';

describe('Inch to Centimetre CLI converter', () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const scriptPath = path.join(__dirname, 'index.js');

    test('Converts 10 inches to centimetres correctly', (t, done) => {
        execFile('node', [scriptPath, '10'], (error, stdout) => {
            assert.match(stdout, /10" = 25\.40 cm/);
            done();
        });
    });

    test('Returns error when no argument is provided', (t, done) => {
        execFile('node', [scriptPath], (error, stdout, stderr) => {
            assert.match(stderr, /Please provide a value in inches as an argument/);
            done();
        });
    });

    test('Returns error for invalid number input', (t, done) => {
        execFile('node', [scriptPath, 'abc'], (error, stdout, stderr) => {
            assert.match(stderr, /Invalid number/);
            done();
        });
    });

    test('Handles 0 inches correctly', (t, done) => {
        execFile('node', [scriptPath, '0'], (error, stdout) => {
            assert.match(stdout, /0" = 0\.00 cm/);
            done();
        });
    });
});