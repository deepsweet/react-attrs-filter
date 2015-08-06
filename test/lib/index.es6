import { expect } from 'chai';
import {
    getPropsFor,
    filterPropsFor,
    filterPropsExcept
} from '../../lib/';

describe('core', () => {
    it('exist', () => {
        expect(getPropsFor).to.exist;
        expect(filterPropsFor).to.exist;
        expect(filterPropsExcept).to.exist;
    });
});
