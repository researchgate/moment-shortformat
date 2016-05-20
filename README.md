Short Date Formatter [![Build Status](https://travis-ci.org/researchgate/moment-shortformat.svg?branch=master)](https://travis-ci.org/researchgate/moment-shortformat) [![npm](https://img.shields.io/npm/v/moment-shortformat.svg)](https://www.npmjs.com/package/moment-shortformat)
==================================================

moment-shortformat.js is an extension to moment.js that formats dates in a short format like it's used on ResearchGate.

Absolute time difference     | output of moment.short()
---------------------------- | ------------------------
0 to 59 seconds              | `1s` to `59s`
1 to 59 minutes              | `1m` to `59m`
1 to 23 hours                | `1h` to `23h`
1 to 6 days                  | `1d` to `6d`
>= 7 days but same year      | e.g `Sep 3` or `Feb 28`
>= 7 days but different year | e.g `Sep 3, 2023` or `Feb 28, 1989`

It works for both negative and positive time differences.

### Usage

Works with AMD, CommonJS and browser environments.

```javascript
// AMD
define(['moment-shortformat'], function(moment) { moment().short() });
```

```javascript
// CommonJS
var moment = require('moment-shortformat');
moment().short()
```

```html
<!-- Browser -->
<script type="text/javascript" src="/moment.js"></script>
<script type="text/javascript" src="/moment-shortformat.js"></script>
<script type="text/javascript">
    moment().short();
</script>
```

Works on both past and future dates.

### Methods

#### `moment().short(Boolean)`

Short formatting the time difference and prefixing or suffixing the formatted time by using [moment.js relativeTime templates](http://momentjs.com/docs/#/customization/relative-time/) `future` and `past`. (default `in %s` and `%s ago`)

If the boolean parameter is set to true the date format will not be prefixed or suffixed. 

__Examples:__

Formats time relative to current time.

```
moment(moment() + (36e5 * 5)).short() // in 5h
moment(moment() - (36e5 * 5)).short() // 5h ago
moment(moment() + (36e5 * 5)).short(true) // 5h
moment(moment() - (36e5 * 5)).short(true) // 5h
```

Times greater than 1 week are converted to dates like `Mar 7`, or
if the year of the date does not match the current year it is convert to `Mar 7, 2031`

```
moment(moment() + 6048e5).short()
// Mar 7
```
