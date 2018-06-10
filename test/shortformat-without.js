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

test('test seconds ago without suffix', () => {
    expect(moment().subtract(25, 'seconds').short(true)).toBe('25s');
    expect(moment().subtract(25, 'seconds').short(true, moment().subtract(20, 'seconds'))).toBe('5s');
});

test('test seconds in future without prefix', () => {
    expect(moment().add(25, 'seconds').short(true)).toBe('25s');
    expect(moment().add(25, 'seconds').short(true, moment().add(20, 'seconds'))).toBe('5s');
});

test('test minutes ago without suffix', () => {
    expect(moment().subtract(5, 'minutes').short(true)).toBe('5m');
    expect(moment().subtract(5, 'minutes').short(true, moment().subtract(4, 'minutes'))).toBe('1m');
});

test('test minutes in future without prefix', () => {
    expect(moment().add(5, 'minutes').short(true)).toBe('5m');
    expect(moment().add(5, 'minutes').short(true, moment().add(4, 'minutes'))).toBe('1m');
});

test('test hours ago without suffix', () => {
    expect(moment().subtract(5, 'hours').short(true)).toBe('5h');
    expect(moment().subtract(5, 'hours').short(true, moment().subtract(4, 'hours'))).toBe('1h');
});

test('test hours in future without prefix', () => {
    expect(moment().add(5, 'hours').short(true)).toBe('5h');
    expect(moment().add(5, 'hours').short(true, moment().add(4, 'hours'))).toBe('1h');
});

test('test days ago without suffix', () => {
    expect(moment().subtract(5, 'days').short(true)).toBe('5d');
    expect(moment().subtract(5, 'days').short(true, moment().subtract(4, 'days'))).toBe('1d');
});

test('test days in future without prefix', () => {
    expect(moment().add(5, 'days').short(true)).toBe('5d');
    expect(moment().add(5, 'days').short(true, moment().add(4, 'days'))).toBe('1d');
});

test('test weeks ago ignoring param', () => {
    var daysago = moment().subtract(8, 'days');
    expect(daysago.short(true)).toBe(daysago.format('MMM D'));
    expect(daysago.short(true, moment().subtract(1, 'days'))).toBe(daysago.format('MMM D'));
});

test('test weeks in future ignoring param', () => {
    var daysago = moment().add(8, 'days');
    expect(daysago.short(true)).toBe(daysago.format('MMM D'));
    expect(daysago.short(true, moment().add(1, 'days'))).toBe(daysago.format('MMM D'));
});

test('test weeks last year ignoring param', () => {
    var daysago = moment().subtract(370, 'days');
    expect(daysago.short(true)).toBe(daysago.format('MMM D, YYYY'));
    expect(daysago.short(true, moment().subtract(1, 'days'))).toBe(daysago.format('MMM D, YYYY'));
});

test('test weeks next year ignoring param', () => {
    var daysago = moment().add(370, 'days');
    expect(daysago.short(true)).toBe(daysago.format('MMM D, YYYY'));
    expect(daysago.short(true, moment().add(1, 'days'))).toBe(daysago.format('MMM D, YYYY'));
});
