import data from '../data/';

export function getPropsFor(tag) {
    return Object.keys(data).filter(propName => {
        return data[propName].indexOf(tag) !== -1;
    });
}

export function filterPropsFor(props, tag) {
    const out = {};
    const propsForTag = getPropsFor(tag);

    Object.keys(props).forEach(propName => {
        if (propsForTag.indexOf(propName) !== -1) {
            out[propName] = props[propName];
        }
    });

    return out;
}

export function filterPropsExcept(props, tag) {
    const out = {};
    const propsForTag = getPropsFor(tag);

    Object.keys(props).forEach(propName => {
        if (propsForTag.indexOf(propName) === -1) {
            out[propName] = props[propName];
        }
    });

    return out;
}
