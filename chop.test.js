import { expect } from '@jest/globals';
import { chop } from './chop.js';

test('Feels all templates correctly', () => {
    const myTemplate = 'I like to eat {{bread}} and {{cheese}}';
    const dataTest = {
        bread: 'baguette',
        cheese: 'brie cheese',
    };

    const expected = 'I like to eat baguette and brie cheese';
    expect(chop(myTemplate, dataTest)).toBe(expected)
})