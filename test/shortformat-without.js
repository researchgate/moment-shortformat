var test = require('tape');
var moment = require('../moment-shortformat');

test('test seconds ago without suffix', function (t) {
    t.plan(1);
    t.equal(moment().subtract(25, 'seconds').short(true), '25s');
});

test('test seconds in future without prefix', function (t) {
    t.plan(1);
    t.equal(moment().add(25, 'seconds').short(true), '25s');
});

test('test minutes ago without suffix', function (t) {
    t.plan(1);
    t.equal(moment().subtract(5, 'minutes').short(true), '5m');
});

test('test minutes in future without prefix', function (t) {
    t.plan(1);
    t.equal(moment().add(5, 'minutes').short(true), '5m');
});

test('test hours ago without suffix', function (t) {
    t.plan(1);
    t.equal(moment().subtract(5, 'hours').short(true), '5h');
});

test('test hours in future without prefix', function (t) {
    t.plan(1);
    t.equal(moment().add(5, 'hours').short(true), '5h');
});

test('test days ago without suffix', function (t) {
    t.plan(1);
    t.equal(moment().subtract(5, 'days').short(true), '5d');
});

test('test days in future without prefix', function (t) {
    t.plan(1);
    t.equal(moment().add(5, 'days').short(true), '5d');
});

test('test weeks ago ignoring param', function (t) {
    t.plan(1);
    var daysago = moment().subtract(8, 'days');
    t.equal(daysago.short(true), daysago.format('MMM D'));
});

test('test weeks in future ignoring param', function (t) {
    t.plan(1);
    var daysago = moment().add(8, 'days');
    t.equal(daysago.short(true), daysago.format('MMM D'));
});

test('test weeks last year ignoring param', function (t) {
    t.plan(1);
    var daysago = moment().subtract(1, 'year');
    t.equal(daysago.short(true), daysago.format('MMM D, YYYY'));
});

test('test weeks next year ignoring param', function (t) {
    t.plan(1);
    var daysago = moment().add(1, 'year');
    t.equal(daysago.short(true), daysago.format('MMM D, YYYY'));
});
