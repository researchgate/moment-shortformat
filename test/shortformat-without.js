import test from 'ava';
import moment from '../moment-shortformat';

test.beforeEach((t) => {
    var RealDate = Date;
    var customTimeMs = moment().valueOf();

    function MockDate() {
        return new RealDate(customTimeMs);
    }
    MockDate.now = () => new MockDate().valueOf();
    MockDate.prototype = RealDate.prototype;

    Date = MockDate;
    t.context.RealDate = RealDate;
});

test.afterEach((t) => {
    Date = t.context.RealDate;
});

test('test seconds ago without suffix', (t) => {
    t.is(moment().subtract(25, 'seconds').short(true), '25s');
});

test('test seconds in future without prefix', (t) => {
    t.is(moment().add(25, 'seconds').short(true), '25s');
});

test('test minutes ago without suffix', (t) => {
    t.is(moment().subtract(5, 'minutes').short(true), '5m');
});

test('test minutes in future without prefix', (t) => {
    t.is(moment().add(5, 'minutes').short(true), '5m');
});

test('test hours ago without suffix', (t) => {
    t.is(moment().subtract(5, 'hours').short(true), '5h');
});

test('test hours in future without prefix', (t) => {
    t.is(moment().add(5, 'hours').short(true), '5h');
});

test('test days ago without suffix', (t) => {
    t.is(moment().subtract(5, 'days').short(true), '5d');
});

test('test days in future without prefix', (t) => {
    t.is(moment().add(5, 'days').short(true), '5d');
});

test('test weeks ago ignoring param', (t) => {
    var daysago = moment().subtract(8, 'days');
    t.is(daysago.short(true), daysago.format('MMM D'));
});

test('test weeks in future ignoring param', (t) => {
    var daysago = moment().add(8, 'days');
    t.is(daysago.short(true), daysago.format('MMM D'));
});

test('test weeks last year ignoring param', (t) => {
    var daysago = moment().subtract(370, 'days');
    t.is(daysago.short(true), daysago.format('MMM D, YYYY'));
});

test('test weeks next year ignoring param', (t) => {
    var daysago = moment().add(370, 'days');
    t.is(daysago.short(true), daysago.format('MMM D, YYYY'));
});
