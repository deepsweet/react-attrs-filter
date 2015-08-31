import data from '../data/';

export function getPropsFor(tag) {
    return Object.keys(data).filter(propName => {
        return data[propName].indexOf(tag) !== -1;
    });
}

export function filterPropsFor(props, tag) {
    const propsForTag = getPropsFor(tag);

    return Object.keys(props)
        .filter(propName => propsForTag.indexOf(propName) !== -1)
        .reduce((obj, propName) => {
            obj[propName] = props[propName];

            return obj;
        }, {});
}

export function filterPropsExcept(props, tag) {
    const propsForTag = getPropsFor(tag);

    return Object.keys(props)
        .filter(propName => propsForTag.indexOf(propName) === -1)
        .reduce((obj, propName) => {
            obj[propName] = props[propName];

            return obj;
        }, {});
}
