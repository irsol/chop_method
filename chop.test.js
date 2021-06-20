import { expect } from '@jest/globals';
import { chop } from './chop.js';

test('Fills all templates correctly', () => {
    const myTemplate = 'I like to eat {{bread}} and {{cheese}}';
    const dataTest = {
        bread: 'baguette',
        cheese: 'brie cheese',
    };

    const expected = 'I like to eat baguette and brie cheese';
    expect(chop(myTemplate, dataTest)).toBe(expected)
});

test('Fills duplicate templates', () => {
    const myTemplate = 'I like to eat {{bread}} and {{cheese}} and {{bread}}';
    const dataTest = {
        bread: 'baguette',
        cheese: 'brie cheese',
    };

    const expected = 'I like to eat baguette and brie cheese and baguette';
    expect(chop(myTemplate, dataTest)).toBe(expected)
});

test('Uses empty string in the template', () => {
    const myTemplate = 'I like to eat {{bread}} and {{cheese}}';
    const dataTest = {
        bread: '',
        cheese: 'brie cheese',
    };

    const expected = 'I like to eat  and brie cheese';
    expect(chop(myTemplate, dataTest)).toBe(expected)
});

test('Uses numbers in the template', () => {
    const myTemplate = 'I like to eat {{1}} and {{cheese}}';
    const dataTest = {
        1: 'baguette',
        cheese: 2,
    };

    const expected = 'I like to eat baguette and 2';
    expect(chop(myTemplate, dataTest)).toBe(expected)
});

test('Uses boolean type in the dataset', () => {
    const myTemplate = 'I like to eat {{bread}} and {{cheese}}';
    const dataTest = {
        bread: false,
        cheese: 'brie cheese',
    };

    const expected = 'I like to eat {{bread}} and brie cheese';
    expect(chop(myTemplate, dataTest)).toBe(expected)
});

