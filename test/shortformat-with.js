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

test('test seconds ago with suffix', (t) => {
    t.is(moment().subtract(25, 'seconds').short(), '25s ago');
});

test('test seconds in future with prefix', (t) => {
    t.is(moment().add(25, 'seconds').short(), 'in 25s');
});

test('test minutes ago with suffix', (t) => {
    t.is(moment().subtract(5, 'minutes').short(), '5m ago');
});

test('test minutes in future with prefix', (t) => {
    t.is(moment().add(5, 'minutes').short(), 'in 5m');
});

test('test hours ago with suffix', (t) => {
    t.is(moment().subtract(5, 'hours').short(), '5h ago');
});

test('test hours in future with prefix', (t) => {
    t.is(moment().add(5, 'hours').short(), 'in 5h');
});

test('test days ago with suffix', (t) => {
    t.is(moment().subtract(5, 'days').short(), '5d ago');
});

test('test days in future with prefix', (t) => {
    t.is(moment().add(5, 'days').short(), 'in 5d');
});

test('test weeks ago', (t) => {
    var daysago = moment().subtract(8, 'days');
    t.is(daysago.short(), daysago.format('MMM D'));
});

test('test weeks in future', (t) => {
    var daysago = moment().add(8, 'days');
    t.is(daysago.short(), daysago.format('MMM D'));
});

test('test weeks last year', (t) => {
    var daysago = moment().subtract(370, 'days');
    t.is(daysago.short(), daysago.format('MMM D, YYYY'));
});

test('test weeks next year', (t) => {
    var daysago = moment().add(370, 'days');
    t.is(daysago.short(), daysago.format('MMM D, YYYY'));
});
