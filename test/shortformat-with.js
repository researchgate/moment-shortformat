var test = require('tape');
var moment = require('../moment-shortformat');

test('test seconds ago with suffix', function (t) {
    t.plan(1);
    t.equal(moment().subtract(25.5, 'seconds').short(), '25s ago');
});

test('test seconds in future with prefix', function (t) {
    t.plan(1);
    t.equal(moment().add(25.5, 'seconds').short(), 'in 25s');
});

test('test minutes ago with suffix', function (t) {
    t.plan(1);
    t.equal(moment().subtract(5.5, 'minutes').short(), '5m ago');
});

test('test minutes in future with prefix', function (t) {
    t.plan(1);
    t.equal(moment().add(5.5, 'minutes').short(), 'in 5m');
});

test('test hours ago with suffix', function (t) {
    t.plan(1);
    t.equal(moment().subtract(5.5, 'hours').short(), '5h ago');
});

test('test hours in future with prefix', function (t) {
    t.plan(1);
    t.equal(moment().add(5.5, 'hours').short(), 'in 5h');
});

test('test days ago with suffix', function (t) {
    t.plan(1);
    t.equal(moment().subtract(5.5, 'days').short(), '5d ago');
});

test('test days in future with prefix', function (t) {
    t.plan(1);
    t.equal(moment().add(5.5, 'days').short(), 'in 5d');
});

test('test weeks ago', function (t) {
    t.plan(1);
    var daysago = moment().subtract(8.5, 'days');
    t.equal(daysago.short(), daysago.format('MMM D'));
});

test('test weeks in future', function (t) {
    t.plan(1);
    var daysago = moment().add(8.5, 'days');
    t.equal(daysago.short(), daysago.format('MMM D'));
});

test('test weeks last year', function (t) {
    t.plan(1);
    var daysago = moment().subtract(1.1, 'year');
    t.equal(daysago.short(), daysago.format('MMM D, YYYY'));
});

test('test weeks next year', function (t) {
    t.plan(1);
    var daysago = moment().add(1.1, 'year');
    t.equal(daysago.short(), daysago.format('MMM D, YYYY'));
});
