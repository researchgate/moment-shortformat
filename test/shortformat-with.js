import test from 'ava';
import moment from '../moment-shortformat';

test.beforeEach((t) => {
    var customTimeMs = moment().valueOf();
    // As per http://momentjs.com/docs/#/customization/now/
    moment.now = function() {
        return customTimeMs;
    }
});

test.afterEach((t) => {
});

test('test seconds ago with suffix', (t) => {
    t.is(moment().subtract(25, 'seconds').short(), '25s ago');
    t.is(moment().subtract(25, 'seconds').short(false, moment().subtract(20, 'seconds')), '5s ago');
});

test('test seconds in future with prefix', (t) => {
    t.is(moment().add(25, 'seconds').short(), 'in 25s');
    t.is(moment().add(25, 'seconds').short(false, moment().add(20, 'seconds')), 'in 5s');
});

test('test minutes ago with suffix', (t) => {
    t.is(moment().subtract(5, 'minutes').short(), '5m ago');
    t.is(moment().subtract(5, 'minutes').short(false, moment().subtract(4, 'minutes')), '1m ago');
});

test('test minutes in future with prefix', (t) => {
    t.is(moment().add(5, 'minutes').short(), 'in 5m');
    t.is(moment().add(5, 'minutes').short(false, moment().add(4, 'minutes')), 'in 1m');
});

test('test hours ago with suffix', (t) => {
    t.is(moment().subtract(5, 'hours').short(), '5h ago');
    t.is(moment().subtract(5, 'hours').short(false, moment().subtract(4, 'hours')), '1h ago');
});

test('test hours in future with prefix', (t) => {
    t.is(moment().add(5, 'hours').short(), 'in 5h');
    t.is(moment().add(5, 'hours').short(false, moment().add(4, 'hours')), 'in 1h');
});

test('test days ago with suffix', (t) => {
    t.is(moment().subtract(5, 'days').short(), '5d ago');
    t.is(moment().subtract(5, 'days').short(false, moment().subtract(4, 'days')), '1d ago');
});

test('test days in future with prefix', (t) => {
    t.is(moment().add(5, 'days').short(), 'in 5d');
    t.is(moment().add(5, 'days').short(false, moment().add(4, 'days')), 'in 1d');
});

test('test weeks ago', (t) => {
    var daysago = moment().subtract(8, 'days');
    t.is(daysago.short(), daysago.format('MMM D'));
    t.is(daysago.short(false, moment().subtract(1, 'days')), daysago.format('MMM D'));
});

test('test weeks in future', (t) => {
    var daysago = moment().add(8, 'days');
    t.is(daysago.short(), daysago.format('MMM D'));
    t.is(daysago.short(false, moment().add(1, 'days')), daysago.format('MMM D'));
});

test('test weeks last year', (t) => {
    var daysago = moment().subtract(370, 'days');
    t.is(daysago.short(), daysago.format('MMM D, YYYY'));
    t.is(daysago.short(false, moment().subtract(1, 'days')), daysago.format('MMM D, YYYY'));
});

test('test weeks next year', (t) => {
    var daysago = moment().add(370, 'days');
    t.is(daysago.short(), daysago.format('MMM D, YYYY'));
    t.is(daysago.short(false, moment().add(1, 'days')), daysago.format('MMM D, YYYY'));
});
