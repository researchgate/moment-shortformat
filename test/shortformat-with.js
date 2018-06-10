const moment = require('../moment-shortformat');

var realMomentNow = moment.now;
beforeEach(() => {
    var customTimeMs = moment('2017-02-01').valueOf();
    // As per http://momentjs.com/docs/#/customization/now/
    moment.now = function() {
        return customTimeMs;
    }
});

afterEach(() => {
    moment.now = realMomentNow;
});

test('test seconds ago with suffix', () => {
    expect(moment().subtract(25, 'seconds').short()).toBe('25s ago');
    expect(moment().subtract(25, 'seconds').short(false, moment().subtract(20, 'seconds'))).toBe('5s ago');
});

test('test seconds in future with prefix', () => {
    expect(moment().add(25, 'seconds').short()).toBe('in 25s');
    expect(moment().add(25, 'seconds').short(false, moment().add(20, 'seconds'))).toBe('in 5s');
});

test('test minutes ago with suffix', () => {
    expect(moment().subtract(5, 'minutes').short()).toBe('5m ago');
    expect(moment().subtract(5, 'minutes').short(false, moment().subtract(4, 'minutes'))).toBe('1m ago');
});

test('test minutes in future with prefix', () => {
    expect(moment().add(5, 'minutes').short()).toBe('in 5m');
    expect(moment().add(5, 'minutes').short(false, moment().add(4, 'minutes'))).toBe('in 1m');
});

test('test hours ago with suffix', () => {
    expect(moment().subtract(5, 'hours').short()).toBe('5h ago');
    expect(moment().subtract(5, 'hours').short(false, moment().subtract(4, 'hours'))).toBe('1h ago');
});

test('test hours in future with prefix', () => {
    expect(moment().add(5, 'hours').short()).toBe('in 5h');
    expect(moment().add(5, 'hours').short(false, moment().add(4, 'hours'))).toBe('in 1h');
});

test('test days ago with suffix', () => {
    expect(moment().subtract(5, 'days').short()).toBe('5d ago');
    expect(moment().subtract(5, 'days').short(false, moment().subtract(4, 'days'))).toBe('1d ago');
});

test('test days in future with prefix', () => {
    expect(moment().add(5, 'days').short()).toBe('in 5d');
    expect(moment().add(5, 'days').short(false, moment().add(4, 'days'))).toBe('in 1d');
});

test('test weeks ago', () => {
    var daysago = moment().subtract(8, 'days');
    expect(daysago.short()).toBe(daysago.format('MMM D'));
    expect(daysago.short(false, moment().subtract(1, 'days'))).toBe(daysago.format('MMM D'));
});

test('test weeks in future', () => {
    var daysago = moment().add(8, 'days');
    expect(daysago.short()).toBe(daysago.format('MMM D'));
    expect(daysago.short(false, moment().add(1, 'days'))).toBe(daysago.format('MMM D'));
});

test('test weeks last year', () => {
    var daysago = moment().subtract(370, 'days');
    expect(daysago.short()).toBe(daysago.format('MMM D, YYYY'));
    expect(daysago.short(false, moment().subtract(1, 'days'))).toBe(daysago.format('MMM D, YYYY'));
});

test('test weeks next year', () => {
    var daysago = moment().add(370, 'days');
    expect(daysago.short()).toBe(daysago.format('MMM D, YYYY'));
    expect(daysago.short(false, moment().add(1, 'days'))).toBe(daysago.format('MMM D, YYYY'));
});
