import { expect } from 'chai';

import {
    getPropsFor,
    filterPropsFor,
    filterPropsExcept
} from '../../lib/';

describe('common', () => {
    it('exist', () => {
        expect(getPropsFor).to.exist;
        expect(filterPropsFor).to.exist;
        expect(filterPropsExcept).to.exist;
    });
});

describe('getPropsFor', () => {
    it('existing tag', () => {
        const result = getPropsFor('input');

        expect(result).to.be.an('array');
        expect(result).to.include.members([ 'value', 'min', 'max' ]);
    });

    it('non-existing tag', () => {
        const result = getPropsFor('ololo');

        expect(result).to.be.an('array');
        expect(result).to.be.length;
    });
});

describe('filterPropsFor', () => {
    it('existing tag', () => {
        const result = filterPropsFor({ ololo: true, min: 0 }, 'input');

        expect(result).to.be.an('object');
        expect(result).to.have.keys('min');
        expect(result).to.not.have.keys('ololo');
    });

    it('non-existing tag', () => {
        const result = filterPropsFor({ ololo: true, min: 0 }, 'ololo');

        expect(result).to.be.an('object');
        expect(result).to.be.empty;
    });
});

describe('filterPropsExcept', () => {
    it('existing tag', () => {
        const result = filterPropsExcept({ ololo: true, min: 0 }, 'input');

        expect(result).to.be.an('object');
        expect(result).to.have.keys('ololo');
        expect(result).to.not.have.keys('min');
    });

    it('non-existing tag', () => {
        const result = filterPropsExcept({ ololo: true, min: 0 }, 'ololo');

        expect(result).to.be.an('object');
        expect(result).to.be.have.keys([ 'ololo', 'min' ]);
    });
});
