Short Date Formatter [![Build Status](https://travis-ci.org/researchgate/moment-shortformat.png?branch=master)](https://travis-ci.org/researchgate/moment-shortformat)
==================================================

moment-shortformat.js is an extension to moment.js that formats dates in a short format like it's used on ResearchGate.

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

#### `moment().short()`

Short formatting.

__Examples:__

Formats time relative to current time.

```
moment(moment() + (36e5 * 5)).short()
// in 5h
```

```
moment(moment() - (36e5 * 5)).short()
// 5h ago
```

Times greater than 1 week are converted to dates like `Mar 7`, or
if the year of the date does not match the current year it is convert to `Mar 7, 2031`

```
moment(moment() + 6048e5).short()
// Mar 7
```
