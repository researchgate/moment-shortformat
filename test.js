var moment = require('./moment-shortformat'),
    assert = require('assert')

assert.equal(moment().subtract(25, 'seconds').short(), '25s ago')
assert.equal(moment().subtract(25, 'seconds').short(true), '25s')
assert.equal(moment().add(25, 'seconds').short(), 'in 25s')
assert.equal(moment().add(25, 'seconds').short(true), '25s')

assert.equal(moment().subtract(5, 'minutes').short(), '5m ago')
assert.equal(moment().subtract(5, 'minutes').short(true), '5m')
assert.equal(moment().add(5, 'minutes').short(), 'in 5m')
assert.equal(moment().add(5, 'minutes').short(true), '5m')

assert.equal(moment().subtract(5, 'hours').short(), '5h ago')
assert.equal(moment().subtract(5, 'hours').short(true), '5h')
assert.equal(moment().add(5, 'hours').short(), 'in 5h')
assert.equal(moment().add(5, 'hours').short(true), '5h')

assert.equal(moment().subtract(2, 'days').short(), '2d ago')
assert.equal(moment().subtract(2, 'days').short(true), '2d')
assert.equal(moment().add(2, 'days').short(), 'in 2d')
assert.equal(moment().add(2, 'days').short(true), '2d')

var tenDaysAgo = moment().subtract(10, 'days');
assert.equal(tenDaysAgo.short(), tenDaysAgo.format('MMM D'))
assert.equal(tenDaysAgo.short(true), tenDaysAgo.format('MMM D'))
var inTenDays = moment().add(10, 'days');
assert.equal(inTenDays.short(), inTenDays.format('MMM D'))
assert.equal(inTenDays.short(true), inTenDays.format('MMM D'))

var oneYearAgo = moment().subtract(1, 'year');
assert.equal(oneYearAgo.short(), oneYearAgo.format('MMM D, YYYY'))
assert.equal(oneYearAgo.short(true), oneYearAgo.format('MMM D, YYYY'))
var inOneYear = moment().add(1, 'year');
assert.equal(inOneYear.short(), inOneYear.format('MMM D, YYYY'))
assert.equal(inOneYear.short(true), inOneYear.format('MMM D, YYYY'))

process.exit(0)
