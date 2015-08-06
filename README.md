[![npm](https://img.shields.io/npm/v/react-attrs-filter.svg?style=flat-square)](https://www.npmjs.com/package/react-attrs-filter)
[![travis](http://img.shields.io/travis/deepsweet/react-attrs-filter.svg?style=flat-square)](https://travis-ci.org/deepsweet/react-attrs-filter)
[![coverage](http://img.shields.io/coveralls/deepsweet/react-attrs-filter/master.svg?style=flat-square)](https://coveralls.io/r/deepsweet/react-attrs-filter)
[![deps](http://img.shields.io/david/deepsweet/react-attrs-filter.svg?style=flat-square)](https://david-dm.org/deepsweet/react-attrs-filter)

## Install

```
npm i -S react-attrs-filter
```

## Usage

```js
import {
    getPropsFor,
    filterPropsFor,
    filterPropsExcept
} from 'react-attrs-filter';

console.log(
    getPropsFor('input')
);
// [ 'list', 'max', 'maxLength', 'min', 'multiple', … ]

console.log(
    filterPropsFor({ ololo: true, min: 0 }, 'input')
);
// { min: 0 }

console.log(
    filterPropsExcept({ ololo: true, min: 0 }, 'input')
);
// { ololo: true }
```

## References

* https://facebook.github.io/react/docs/tags-and-attributes.html
* https://facebook.github.io/react/docs/events.html
* https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
