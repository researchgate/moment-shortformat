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

test('test seconds ago without suffix', (t) => {
    t.is(moment().subtract(25, 'seconds').short(true), '25s');
    t.is(moment().subtract(25, 'seconds').short(true, moment().subtract(20, 'seconds')), '5s');
});

test('test seconds in future without prefix', (t) => {
    t.is(moment().add(25, 'seconds').short(true), '25s');
    t.is(moment().add(25, 'seconds').short(true, moment().add(20, 'seconds')), '5s');
});

test('test minutes ago without suffix', (t) => {
    t.is(moment().subtract(5, 'minutes').short(true), '5m');
    t.is(moment().subtract(5, 'minutes').short(true, moment().subtract(4, 'minutes')), '1m');
});

test('test minutes in future without prefix', (t) => {
    t.is(moment().add(5, 'minutes').short(true), '5m');
    t.is(moment().add(5, 'minutes').short(true, moment().add(4, 'minutes')), '1m');
});

test('test hours ago without suffix', (t) => {
    t.is(moment().subtract(5, 'hours').short(true), '5h');
    t.is(moment().subtract(5, 'hours').short(true, moment().subtract(4, 'hours')), '1h');
});

test('test hours in future without prefix', (t) => {
    t.is(moment().add(5, 'hours').short(true), '5h');
    t.is(moment().add(5, 'hours').short(true, moment().add(4, 'hours')), '1h');
});

test('test days ago without suffix', (t) => {
    t.is(moment().subtract(5, 'days').short(true), '5d');
    t.is(moment().subtract(5, 'days').short(true, moment().subtract(4, 'days')), '1d');
});

test('test days in future without prefix', (t) => {
    t.is(moment().add(5, 'days').short(true), '5d');
    t.is(moment().add(5, 'days').short(true, moment().add(4, 'days')), '1d');
});

test('test weeks ago ignoring param', (t) => {
    var daysago = moment().subtract(8, 'days');
    t.is(daysago.short(true), daysago.format('MMM D'));
    t.is(daysago.short(true, moment().subtract(1, 'days')), daysago.format('MMM D'));
});

test('test weeks in future ignoring param', (t) => {
    var daysago = moment().add(8, 'days');
    t.is(daysago.short(true), daysago.format('MMM D'));
    t.is(daysago.short(true, moment().add(1, 'days')), daysago.format('MMM D'));
});

test('test weeks last year ignoring param', (t) => {
    var daysago = moment().subtract(370, 'days');
    t.is(daysago.short(true), daysago.format('MMM D, YYYY'));
    t.is(daysago.short(true, moment().subtract(1, 'days')), daysago.format('MMM D, YYYY'));
});

test('test weeks next year ignoring param', (t) => {
    var daysago = moment().add(370, 'days');
    t.is(daysago.short(true), daysago.format('MMM D, YYYY'));
    t.is(daysago.short(true, moment().add(1, 'days')), daysago.format('MMM D, YYYY'));
});
