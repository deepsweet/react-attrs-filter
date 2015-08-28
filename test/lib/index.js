import test from 'tape';

import {
    getPropsFor,
    filterPropsFor,
    filterPropsExcept
} from '../../lib/';

test('exist', assert => {
    assert.true(
        typeof getPropsFor === 'function',
        'getPropsFor must be a function'
    );

    assert.true(
        typeof filterPropsFor === 'function',
        'filterPropsFor must be a function'
    );

    assert.true(
        typeof filterPropsExcept === 'function',
        'filterPropsExcept must be a function'
    );

    assert.end();
});

test('getPropsFor + existing tag', assert => {
    const result = getPropsFor('input');

    assert.true(
        Array.isArray(result),
        'must be an array'
    );

    assert.true(
        result.indexOf('value') !== -1,
        'must contain "value"'
    );

    assert.true(
        result.indexOf('min') !== -1,
        'must contain "min"'
    );

    assert.true(
        result.indexOf('max') !== -1,
        'must contain "max"'
    );

    assert.end();
});

test('getPropsFor + non-existing tag', assert => {
    const result = getPropsFor('ololo');

    assert.true(
        Array.isArray(result),
        'must be an array'
    );

    assert.true(
        result.length === 0,
        'must be empty'
    );

    assert.end();
});

test('filterPropsFor + existing tag', assert => {
    const result = filterPropsFor({ ololo: true, min: 0 }, 'input');

    assert.true(
        Object.prototype.toString.call(result) === '[object Object]',
        'must be an object'
    );

    assert.true(
        'min' in result,
        'must contain "min"'
    );

    assert.true(
        !('ololo' in result),
        'must not contain "ololo"'
    );

    assert.end();
});

test('filterPropsFor + non-existing tag', assert => {
    const result = filterPropsFor({ ololo: true, min: 0 }, 'ololo');

    assert.true(
        Object.prototype.toString.call(result) === '[object Object]',
        'must be an object'
    );

    assert.true(
        Object.keys(result).length === 0,
        'must be empty'
    );

    assert.end();
});

test('filterPropsExcept + existing tag', assert => {
    const result = filterPropsExcept({ ololo: true, min: 0 }, 'input');

    assert.true(
        Object.prototype.toString.call(result) === '[object Object]',
        'must be an object'
    );

    assert.true(
        'ololo' in result,
        'must not contain "ololo"'
    );

    assert.true(
        !('min' in result),
        'must contain "min"'
    );

    assert.end();
});

test('filterPropsExcept + non-existing tag', assert => {
    const result = filterPropsExcept({ ololo: true, min: 0 }, 'ololo');

    assert.true(
        Object.prototype.toString.call(result) === '[object Object]',
        'must be an object'
    );

    assert.true(
        'ololo' in result,
        'must not contain "ololo"'
    );

    assert.true(
        'min' in result,
        'must contain "min"'
    );

    assert.end();
});
