import React from 'react';
import renderer from 'react-test-renderer';
import {addTwo} from '../classes/testComponent';


test('two plus two equals four', () => {
        const four = addTwo();
        expect(four).toBe(4);
    }
)